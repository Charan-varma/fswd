var express = require("express")
var app = express()
const port = 8888
var path = require("path")

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

var cookieParser = require("cookie-parser")
app.use(cookieParser())

var movies = new Map([ ["vizag", ["Salaar", "Jailer", "Barbie"]],
                       ["hyderabad", ["Salaar", "Project K", "Animal", "RRR", "Oppenheimer"]],
                       ["bangalore", ["Salaar", "KGF"]]
                    ])

app.get("/movies", (req, res)  => {
    
    if(req.cookies.city) {

        var output = "<ul>"

        movies.forEach( () => {
            if (movies.has(req.cookies.city)) {
                output += `<li> ${movies.get()} </li>`
            }
        })

        output += "<ul>"

    }

    else {
        res.render("select")
    }

})

app.get("/select", (req, res) => {
    res.render("city")
})

app.post("/select", (req,res) => {
    var city = req.body.city
    res.cookie("city", city, {maxAge: 24 * 60 * 60 * 1000})
    res.redirect("movies")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


