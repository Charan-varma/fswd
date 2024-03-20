var express = require("express")
var {pool} = require("./database_pool")

const port = 8888
var app = express()

app.use(express.json())

app.get("/depts", (req, res) => {
    pool.query("SELECT * FROM departments", 
        (err, departments) => {
            if (err) {
                res.status(500).send("Error: " + err.message)
            }
            else {
                res.json(departments)
            }
    })
})

app.get("/depts/:id", (req, res) => {
    pool.query("SELECT * FROM departments WHERE dept_id = ?", 
        [req.params.id], (err, result) => {
            if (err) {
                res.status(500).send("Error: " + err.message)
            }
            else {
                if (result.length == 0) {
                    res.status(404).send("Department Id Not Found!")
                }
                else {
                    res.json(result[0])
                }
            }
        })
})

app.delete("/depts/:id", (req, res) => {
    pool.query("DELETE FROM departments WHERE dept_id = ?",
        [req.params.id], (err, result) => {
            if (err) {
                res.status(500).send("Error: " + err.message)
            }
            else {
                if (result.affectedRows === 0) {
                    res.status(404).send("Department Id Not Found!")
                }
                else {
                    res.sendStatus(204)
                }
            }
        })
})

app.post("/depts", (req, res) => {
    pool.query("INSERT INTO departments VALUE (?, ?)", 
        [req.body.id, req.body.name], (err, result) => {
            if (err) {
                res.status(500).send("Error: " + err.message)
            }
            else{
                if (result.affectedRows === 0) {
                    res.status(404).send("Department cannot be added!")
                }
                else {
                    res.status(201).send("Department added successfully!")
                }
            }
        })
})

app.put("/depts/:id", (req, res) => {
    let name = req.body.name
    if (!name || name.length == 0) {
        res.status(400).send("Name is missing!")
        return
    }

    pool.query("UPDATE departments SET dept_name = ? WHERE dept_id = ?",
        [req.body.name, req.params.id], (err, result) => {
            if (err) {
                res.status(500).send("Error: " + err.message)
            }
            else {
                if (result.affectedRows === 0) {
                    res.status(404).send("Department not found!")
                }
                else {
                    res.json({id: req.params.id, name: req.body.name})
                }
            }
        })
})

app.listen(port, () => {
    console.log(`REST API at port ${port}`)
}) 