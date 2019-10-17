exports.config = {
  environment: 'production',
  common: {
    database: {
      name: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DATABASE,
      host: process.env.HOST,
      port: process.env.PORT
    }
  },
  isProduction: true
};
