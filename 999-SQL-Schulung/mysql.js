const mariadb = require("mariadb");

const connection = mariadb.createConnection({
  host: "localhost",
  user: "ptchblvck",
  password: "7932",
});

connection
  .then((conn) => {
    conn
      .query("SELECT * FROM `zoo`.`zookeeper`", function (err, results) {
        console.log(results);
      })
      .then((rows) => {
        console.log(rows); // [{ "1": 1 }]
        conn.end();
      })
      .catch((err) => {
        console.log(err);
        //handle query error
      });
  })
  .catch((err) => {
    console.log(err);
    //handle connection error
  });
