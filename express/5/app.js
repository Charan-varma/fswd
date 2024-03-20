var express = require("express")
var path = require("path")

var port = 8888
var app = express()

var adminRouter  = require("./admin")
app.use("/admin", adminRouter)

app.get("/", (req, res) => {
    res.send(`<h1>Main Router</h1>`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})