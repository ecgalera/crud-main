const mysql = require("mysql");

// Conexión a la base de datos
const connection = mysql.createConnection({
   host: "localhost",
   user: "root",
   password: "",
   database: "fullstack",
});

connection.connect((err) => {
   if (err) throw err;
   console.log("¡Conexión establecida!");
});

module.exports = connection;
