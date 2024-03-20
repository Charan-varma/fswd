var express = require("express")
var router = express.Router()

router.get("/", (req, res) => {
    res.send("<h1>Admin Operations</h1>")
})

router.get("/create", (req, res) => {
    res.send("<h1>Admin Operations - Creating New User</h1>")
})

module.exports = router