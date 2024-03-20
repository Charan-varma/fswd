var express = require("express")
var path = require("path")
var app = express()
var port = 8888

//view engine setup
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

let courses = [
    { title: "Python", fee: 10000 },
    { title: "Full Stack Web Development", fee: 20000 },
    { title: "AWS", fee: 1000 }
]

app.get("/today", (req, res) => {
    res.render("today", {today : new Date() })
})

app.get("/courses", (req, res) => {
    res.render("list_courses", {courses : courses, trainer : "Srikanth"})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})