require("dotenv").config();
module.exports= {

  "development": {
    "username": "root",
    "password": "Gm1382273",
    "database": "user_db",
    "host": "localhost",
    "dialect": "mysql",
    "logging": false
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "testdb",
    "host": "localhost",
    "dialect": "mysql",
    "logging": false
  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  }
}