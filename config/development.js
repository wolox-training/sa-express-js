exports.config = {
  environment: 'development',
  common: {
    database: {
      name: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      host: process.env.HOST,
      port: process.env.PORT
    }
  },
  isDevelopment: true
};
