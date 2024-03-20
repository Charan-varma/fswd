let d1 = new Date("2023-01-01")
console.log(d1.toString())
console.log(d1)

let d2 = new Date(2023, 0, 1)
console.log(d2.toString())

let cd = new Date()
cd.setDate(cd.getDate() + 10)
console.log(cd.toString())
