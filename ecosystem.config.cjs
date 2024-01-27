module.exports = {
  apps: [
    {
      name: "vite-deploy",
      script: "serve -s build -p 5173",
      error_file: "./pm2-error.log",
      out_file: "./pm2-out.log",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
