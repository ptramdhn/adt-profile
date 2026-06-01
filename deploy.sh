#!/usr/bin/env bash
set -euo pipefail

APP_DIR=/var/www/adt-profile
REPO=https://github.com/ptramdhn/adt-profile.git

# 1. Swap 2G (needed for build on 1GB RAM)
if [ "$(swapon --show | wc -l)" -eq 0 ]; then
  sudo fallocate -l 2G /swapfile
  sudo chmod 600 /swapfile
  sudo mkswap /swapfile
  sudo swapon /swapfile
  echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
fi

# 2. PM2
command -v pm2 >/dev/null 2>&1 || npm install -g pm2 2>/dev/null || sudo env PATH=$PATH npm install -g pm2

# 3. Clone or pull
sudo mkdir -p /var/www
sudo chown -R "$USER:$USER" /var/www
if [ -d "$APP_DIR/.git" ]; then
  cd "$APP_DIR" && git pull origin main
else
  git clone "$REPO" "$APP_DIR" && cd "$APP_DIR"
fi

# 4. Build + copy static into standalone
npm ci
NODE_OPTIONS=--max-old-space-size=768 npm run build
cp -r .next/static .next/standalone/.next/
cp -r public .next/standalone/

# 5. PM2 start + autostart on boot
pm2 start ecosystem.config.js || pm2 reload ecosystem.config.js --update-env
pm2 save
sudo env PATH=$PATH pm2 startup systemd -u "$USER" --hp "$HOME"

# 6. Nginx reverse proxy (uses existing Let's Encrypt cert)
sudo tee /etc/nginx/sites-available/adt-profile >/dev/null <<'NGINX'
server {
    listen 80;
    server_name anugrahdjayatunggal.me www.anugrahdjayatunggal.me;
    return 301 https://$host$request_uri;
}
server {
    listen 443 ssl;
    http2 on;
    server_name anugrahdjayatunggal.me www.anugrahdjayatunggal.me;

    ssl_certificate     /etc/letsencrypt/live/anugrahdjayatunggal.me/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/anugrahdjayatunggal.me/privkey.pem;

    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;

    gzip on;
    gzip_types text/plain text/css application/javascript application/json image/svg+xml;

    location /_next/static/ {
        proxy_pass http://127.0.0.1:3000;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_buffering off;
    }
}
NGINX
sudo rm -f /etc/nginx/sites-enabled/default
sudo ln -sf /etc/nginx/sites-available/adt-profile /etc/nginx/sites-enabled/adt-profile
sudo nginx -t && sudo systemctl reload nginx

echo "DONE -> https://anugrahdjayatunggal.me"
