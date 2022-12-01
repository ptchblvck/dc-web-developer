const express = require("express");
const mysql = require("mysql2");
var cors = require("cors");
const mariadb = require("mariadb");

const connection = mariadb.createConnection({
  host: "localhost",
  user: "ptchblvck",
  password: "7932",
  database: "mondial",
});

const app = express();
const port = 3000;

app.use(cors());

// create the connection to database
// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "gyula",
//   password: "gyula",
//   database: "mondial",
// });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/unconditional", (req, res) => {
  connection.query(
    'SELECT * FROM `city` WHERE `Country` = "A"',
    function (err, results, sql_fields) {
      console.log(results); // results contains rows returned by server
      //console.log(fields); // fields contains extra meta data about results, if available
      let fields = [];
      sql_fields.forEach((element) => {
        fields.push({ name: element.name });
      });
      res.json({ fields, results });
    }
  );
});

app.get("/conditional", (req, res) => {
  console.log(req.url);
  connection.execute(
    "SELECT * FROM `city` WHERE `Country` = ?",
    [req.query.land],
    function (err, results, sql_fields) {
      console.log("err", err);
      console.log(results); // results contains rows returned by server
      //console.log(fields); // fields contains extra meta data about results, if available
      let fields = [];
      sql_fields.forEach((element) => {
        fields.push({ name: element.name });
      });
      res.json({ fields, results });
    }
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
