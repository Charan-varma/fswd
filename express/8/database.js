var mysql = require("mysql")

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "jun28"
})

con.connect( (err) => {
    if (err) throw err
})

module.exports.con = con