module.exports = {
  apps: [
    {
      name: "cardcraw-server", // 这里是别名
      script: "src/index.js",
      instances: "max", // 启动实例数量
      autorestart: true, // 自动重启
      watch: true, // 是否监视文件变化
      max_memory_restart: "8G", // 最大内存限制
      env: {
        NODE_ENV: "production", // 默认环境变量
      },
      env_production: {
        NODE_ENV: "production", // 生产环境变量
      },
      env_development: {
        NODE_ENV: "development", // 开发环境变量
      },
      // 使用相对路径设置日志文件
      error_file: "./pm2log/error.log", // 错误日志
      out_file: "./pm2log/output.log", // 输出日志
      log_file: "./pm2log/combined.log", // 综合日志
      merge_logs: true, // 将日志合并输出
      time: true,
    },
  ],
};
