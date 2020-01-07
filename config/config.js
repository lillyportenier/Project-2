require("dotenv").config();
module.exports= {

  "development": {
    "username": "gdt2fwua5bbe7ere",
    "password": process.env.LOCAL_PASSWORD,
    "database": "	viqi0qrybd1kpbed",
    "port": 3306,
    "host": "	i5x1cqhq5xbqtv00.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    "dialect": "mysql",
    "logging": false
  },
  "test": {
    "username": "gdt2fwua5bbe7ere",
    "password": "a28qa5uffhds34k4",
    "database": "	viqi0qrybd1kpbed",
    "port": 3306,
    "host": "	i5x1cqhq5xbqtv00.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    "dialect": "mysql",
    "logging": false
  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "username": "gdt2fwua5bbe7ere",
    "password": "a28qa5uffhds34k4",
    "database": "	viqi0qrybd1kpbed",
    "port": 3306,
    "host": "	i5x1cqhq5xbqtv00.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    "dialect": "mysql",
    "logging": false
  }
}