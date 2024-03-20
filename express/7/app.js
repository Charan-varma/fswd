var express = require("express")
var app = express()
var port = 8888

var cookieSession = require("cookie-session")

app.use(cookieSession({
    name: "session-data",
    keys: ["k1"],
    maxAge: 24 * 60 * 60 * 1000
}))

app.get("/countViews", (req, res) => {
    req.session.count = (req.session.count || 0) + 1
    res.send(`<h1>You viewed this page for ${req.session.count} times</h1>`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})