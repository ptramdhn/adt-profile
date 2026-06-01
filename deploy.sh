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
sudo cp "$APP_DIR/deploy/nginx.conf" /etc/nginx/sites-available/adt-profile
sudo rm -f /etc/nginx/sites-enabled/default
sudo ln -sf /etc/nginx/sites-available/adt-profile /etc/nginx/sites-enabled/adt-profile
sudo nginx -t && sudo systemctl reload nginx

echo "DONE -> https://anugrahdjayatunggal.me"
