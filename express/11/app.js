var express = require("express")
var {pool} = require("./database_pool")

const port = 8888
var app = express()

app.use(express.json())

app.get("/emps", (req, res) => {
    pool.query("SELECT * FROM employees", 
        (err, employees) => {
            if (err) {
                res.status(500).send("Err: " + err.messgae)
              
            }
            else {
                res.json(employees)
            }
    })

})

app.get("/emps/:id", (req, res) => {
    pool.query("SELECT * FROM employees WHERE emp_id = ? ", 
        [req.params.id], (err, employees) => {
            if (err) {
                res.status(500).send("Error: " + err.message)
            }
            else {
                if (employees.length === 0) {
                    res.status(404).send("Employee Id not found!")
                }
                else {
                    res.json(employees[0])
                }
            }
        })
})

app.post("/emps", (req, res) => {
    pool.query("INSERT INTO employees VALUE (?, ?, ?, ?)", 
        [req.body.id, req.body.fullname, req.body.deptid, req.body.salary], (err, result) => {
            if (err) {
                res.status(500).send("Error: " + err.message)
            }
            else {
                if (result.affectedRows === 0) {
                    res.status(404).send("Employee cannot be added")
                }
                else {
                    res.status(201).send("Employee added successfully")
                }
            }
        })
})  

app.delete("/emps/:id", (req, res) => {
    pool.query("DELETE FROM employees WHERE emp_id = ?", 
        [req.params.id], (err, result) => {
            if (err) {
                res.status(500).send("Error: " + err.message)
            }
            else {
                if (result.affectedRows === 0) {
                    res.status(404).send("Employee id not found!")
                }
                else {
                    res.sendStatus(204)
                }
            }
        })
})

app.put("/emps/:id", (req, res) => {
    let deptid = req.body.deptid
    if (!deptid || deptid.length == 0) {
        res.status(400).send("Department id is missing!")
        return
    }

    pool.query("UPDATE employees SET dept_id = ? WHERE emp_id = ? ", 
        [req.body.deptid, req.params.id], (err, result) => {
            if (err) {
                res.status(500).send("Error: " + err.message)
            }
            else {
                if (result.affectedRows === 0) {
                    res.status(404).send("Employee cannot be updated")
                }
                else {
                    res.json({id : req.params.id, dept_id: req.body.deptid, })
                }
            }
        })
})

app.listen(port, () => {
    console.log(`REST API at port ${port}`)
})