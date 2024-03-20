let names = ["JavaScript", "Java", "Python"]
names[5] = "TypeScript"
names[1] = "Java 20"
names["new"] = "C#"

for (let idx in names) {
    console.log("Value at " + idx + " is " + names[idx])
}

for (let val of names) {
    console.log(val)
}