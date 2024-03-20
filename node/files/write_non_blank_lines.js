const fs = require("fs")

const source = __dirname + "\\names.txt"
const target = __dirname + "\\names_copy.txt"

//synchronous
    // let data_sync = fs.readFileSync(source, "utf-8")

    // let lines = data_sync.split("\n")
    // let output_lines = []

    // for (let line of lines) {

    //     if (line.trim().length > 0)
    //         output_lines.push(line.trim())

    // }

    // fs.writeFileSync(target, output_lines.join("\n"))
    // console.log("Copied Successfully")


//Asynchronous
let data = fs.readFile(source, "utf-8", (err, data) => {
    let lines = data.split("\n")
    let output_lines = []
    
    for (let line of lines) {
    
        if (line.trim().length > 0)
            output_lines.push(line.trim())
    
    }
    
    fs.writeFileSync(target, output_lines.join("\n"), () =>  console.log("Copied Successfully"))
    
})