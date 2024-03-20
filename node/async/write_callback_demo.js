const fs = require("fs")

const source = __dirname + "//names.txt"
const target = __dirname + "//names_copy.txt"

fs.readFile(source , "utf-8", 
     (err, data) => {
        fs.writeFile(target, data, 
            () => 
            console.log("Copied Successfully"))
})