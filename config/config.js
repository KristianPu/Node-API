require("dotenv").config();

module.exports = {
  development: {
    dialect: "sqlite",
    storage: "database.sqlite3",
  },
  production: {
    username: process.env.PROD_DB_USERNAME,
    password: process.env.PROD_DB_PASSWORD,
    database: process.env.PROD_DB_NAME,
    host: process.env.PROD_DB_HOSTNAME,
    port: process.env.PROD_DB_PORT,
    dialect: "mysql",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
      dateStrings: true,
      typeCast: true,
      timezone: "+02:00",
    },
    timezone: "+02:00",
    logging: false,
  },
};