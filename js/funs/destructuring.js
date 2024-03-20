const a = [10, 20]

let n1 = a[0]
let n2 = a[1]

let [x, y] = a
console.log(x)
console.log(y)

let [v1, v2, v3] = a
console.log(v1, v2, v3)

let [v4, ...v5] = [10, 20, 30]
console.log(v4, v5)