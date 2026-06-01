module.exports = {
  apps: [
    {
      name: "adt-profile",
      script: "./.next/standalone/server.js",
      cwd: "/var/www/adt-profile",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      max_memory_restart: "400M",
      env: {
        NODE_ENV: "production",
        HOSTNAME: "0.0.0.0",
        PORT: 3000,
      },
    },
  ],
};
