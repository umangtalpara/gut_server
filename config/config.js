require('dotenv').config();

module.exports = {
    "development": {
      "username":  process.env.DB_USER || "root",
      "password": process.env.DB_PASSWORD || "localhost",
      "database": process.env.DB_DATABASE || "gut",
      "host":process.env.DB_HOST || "127.0.0.1",
      "dialect": "mysql"
    },
    "test": {
      "username":  process.env.DB_USER || "root",
      "password":process.env.DB_PASSWORD || "localhost",
      "database": process.env.DB_DATABASE || "gut",
      "host":process.env.DB_HOST || "127.0.0.1",
      "dialect": "mysql"
    },
    "production": {
        "username":  process.env.DB_USER || "root",
        "password": process.env.DB_PASSWORD || "localhost",
        "database": process.env.DB_DATABASE || "gut",
        "host":process.env.DB_HOST || "127.0.0.1",
        "dialect": "mysql"
    }
  }