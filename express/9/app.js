var express = require("express")
const port = 8888

var app = express()

function logger(req, res, next) {
    console.log("URL: " + req.originalUrl)
    next()
}

function addTimeStamp(req, res, next) {
    req.startTime = new Date()
    next()
}

app.use("/list", logger)
app.use(addTimeStamp)

app.get("/", (req, res) => {
    res.send(`<h1>Middleware Demo</h1> Started at ${req.startTime}`)
})

app.get("/list", (req, res) => {
    res.send("<h1>Listing</h1>")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})