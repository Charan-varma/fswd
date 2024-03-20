var express = require("express")
var app = express()
var port = 8888

app.get("/", (req, res) => {
    res.send("<h1>Srikanth Technologies</h1>")
})

app.get("/wish", (req, res) => {
    let message = req.query.message ?? "Hello"
    let user = req.query.user ?? "Guest"
    let result = `<h1>${message} ${user}</h1>`
    res.send(result)
})

app.get("/wishing/:msg/:user", (req, res) => {
    let message = req.params.msg
    let user = req.params.user
    let result = `<h1>${message} ${user}</h1>`
    res.send(result)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

