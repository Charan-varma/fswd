let fs = require("fs")

const filename = __dirname + "\\names.txt"

fs.readFile(filename, "utf-8", 
    (err, data) => {
        console.log(data)
})

for (let i = 0; i <= 2000000000; i++) {
    ;
}

console.log("The End")



