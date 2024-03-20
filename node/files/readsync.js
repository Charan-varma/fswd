let fs = require("fs")

let data = fs.readFileSync(__dirname + "/names.txt", "utf-8")

console.log(data)
console.log("The End")

