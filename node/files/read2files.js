let fs = require("fs")

const names = __dirname + "\\names.txt"
const langs = __dirname + "\\langs.txt"

fs.readFile(names, "utf-8", 
    (err, data) => {
        console.log(data)
})

console.log("Initiated first read!")

fs.readFile(langs, "utf-8", 
    (err, data) => {
        console.log(data)
})

console.log("The End")