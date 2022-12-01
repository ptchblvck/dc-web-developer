const express = require("express");
const mysql = require("mysql2");
var cors = require("cors");

require("dotenv").config({ path: ".env" });
// require("dotenv").config();
// console.log(process.env); // remove this after you've confirmed it is working

const app = express();
const port = 3000;

app.use(cors());

// create the connection to database
const connection2 = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PWD,
  database: process.env.MYSQL_DB2,
});

// connection to the zoo database
const connection1 = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PWD,
  database: process.env.MYSQL_DB1,
});

function addZooKeeper(secnr, name, address, zooId) {
  let cells = [];
  let zooKeeper = {};
  zooKeeper.socialsecuritynr = secnr;
  zooKeeper.name = name;
  zooKeeper.address = address;
  zooKeeper.zooID_fk = zooId;

  cells.push(zooKeeper);
  console.log(cells);
  return cells;
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/zookeeper", (req, res) => {
  connection1.query(
    "SELECT * FROM `zookeeper`",
    function (err, results, sql_cells) {
      console.log(results);
      let cells = [];
      sql_cells.forEach((el) => {
        cells.push({ name: el.name });
      });
      res.json({ cells, results });
    }
  );
});

app.get("/addkeeper", (req, res) => {
  let insert =
    "INSERT INTO `zookeeper` (socialsecuritynr, name, address, zooID_fk) VALUES ?";
  connection1.query(
    insert,
    [addZooKeeper()],
    function (err, inputs, sql_cells) {
      if (err) throw err;
      console.log(inputs);
    }
  );
});

app.get("/unconditional", (req, res) => {
  connection2.query(
    'SELECT * FROM `city` WHERE `Country` = "A"',
    function (err, results, sql_fields) {
      console.log(results); // results contains rows returned by server
      // console.log(fields); // fields contains extra meta data about results, if available
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
  connection2.execute(
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
