var mysql = require("mysql")
var pool = mysql.createPool({
    connectionLimit: 4,
    host: "localhost",
    user: "root",
    password: "root",
    database: "jun28"
})

module.exports.pool = pool