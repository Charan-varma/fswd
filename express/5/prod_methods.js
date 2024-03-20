var express = require("express")
var router = express.Router()

router.get("/", (req, res) => {
    res.send("<h1>List Products</h1>")
})

router.get("/add", (req, res) => {
    res.send("<h1>Add Method</h1>")
})

router.get("/delete", (req, res) => {
    res.send("<h1>Delete Method</h1>")
})

module.exports = router