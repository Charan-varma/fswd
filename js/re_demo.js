var pattern = /\d+/
console.log(typeof(pattern))

let s = "Abc 123 234"
let matches = /\d+$/.exec(s)

console.log(matches)
console.log("Found " + matches[0] + " at index " + matches.index)

let st = "Abc 123 234"
console.log(/\w+/.exec(st))

console.log(/[A-Z]+/.test("ABC 123"))

console.log(/[@#*]+/.test("@"))