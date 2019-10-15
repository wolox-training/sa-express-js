exports.config = {
  environment: 'testing',
  isTesting: true,
  common: {
    database: {
      name: process.env.DB_NAME_TEST,
      password: process.env.DB_PASSWORD_TEST,
      database: process.env.DATABASE_TEST,
      host: process.env.HOST_TEST,
      port: process.env.PORT_TEST
    },

    session: {
      secret: 'some-super-secret'
    }
  }
};
