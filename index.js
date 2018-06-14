const express = require("express");
// const mysql = require("mysql");
// const dbconfig   = require('./config/db.js');
// const connection = mysql.createConnection(dbconfig);
const app = express();

app.get("/", (req, res) => {
  // console.log('config:', dbconfig);
  res.send("Hello World!");
});

if(!module.parent) app.listen(process.env.PORT || 3000);

module.exports = app;
