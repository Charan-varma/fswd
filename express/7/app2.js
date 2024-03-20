var express = require("express")
var app = express()
var port = 8888

var session = require("express-session")

app.use(session({
    name: "sessionid",
    resave: false,
    secret: "abc",
    saveUninitialized: false
}))

app.get("/views", (req, res) =>{
    req.session.views = (req.session.views || 0) + 1
    res.send(`<h1>You have viewed this page ${req.session.views} times</h1>`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})