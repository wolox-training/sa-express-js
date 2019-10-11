exports.config = {
  environment: 'development',
  common: {
    database: {
      name: process.env.DB_NAME_DEV,
      password: process.env.DB_PASSWORD_DEV,
      database: process.env.DATABASE_DEV,
      host: process.env.HOST_DEV,
      port: process.env.PORT_DEV
    }
  },
  isDevelopment: true
};
