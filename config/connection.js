// Set up MySQL connection.
var mysql = require("mysql");

// Connections
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db",
  });
  console.log("Connected")
}


// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected on port 3306" + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
