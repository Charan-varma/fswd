var express = require("express")
var path = require("path")
var app = express()
var port = 8888

app.use(express.static("views"))

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

var bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended : false }))

app.get("/interest", (req, res) => {
    res.render("interest")
})

app.post("/interest", (req, res) => {
    let {amount, rate} = req.body
    let interest = amount * rate / 100
    res.render("result", {interest : interest})
})

app.get("/interest2", (req, res) => {
    res.render("interest2", {amount : 0, rate: 0, interest: undefined})
})

app.post("/interest2", (req, res) =>{
    let {amount, rate} = req.body
    let interest = amount * rate / 100
    res.render("interest2", {interest: interest, ...req.body})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

