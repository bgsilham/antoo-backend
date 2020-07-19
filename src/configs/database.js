require("dotenv").config();
const {
  DB_HOST: host,
  DB_USER: user,
  DB_PASS: password,
  DB_NAME: database,
} = process.env;
const mysql = require("mysql");

const con = mysql.createConnection({
  host,
  user,
  password,
  database,
});

module.exports = con;
