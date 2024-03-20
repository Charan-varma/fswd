var students = new Map([[1,"Robert"], [2,"Mark"], [2, "Jason"]])
students.set(5,"Jack")

for(var v of students.entries()) {
    console.log(v)
}

s = students.get(1)
console.log(s)

k = students.has(5)
console.log(k)

students.delete(5)

for (let m of students.entries()) {
    console.log(m)
}