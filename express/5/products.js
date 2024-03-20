var express = require("express")
var path = require("path")

var port = 8888
var app = express()

var product = require("./prod_methods")
app.use("/products", product)

app.get("/", (req, res) => {
    res.send("<h1>Main Product router</h1>")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})