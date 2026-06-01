#!/bin/bash
set -e
cd /var/www/adt-profile
git pull origin main
npm ci
NODE_OPTIONS=--max-old-space-size=768 npm run build
cp -r .next/static .next/standalone/.next/
cp -r public .next/standalone/
pm2 reload ecosystem.config.js --update-env
