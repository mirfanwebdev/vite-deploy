module.exports = {
  apps: [
    {
      name: "vite-deploy",
      script: "start",
      error_file: "./pm2-error.log",
      out_file: "./pm2-out.log",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
