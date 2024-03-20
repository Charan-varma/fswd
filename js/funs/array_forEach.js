let a = [1,3,4,5,10,30]

//normal function
function print(n) {
    console.log(n)
}

a.forEach(print)

//function expression

a.forEach(function (n) {
    console.log(n)
})

//arrow function
a.forEach((n) => console.log(n))

a.forEach((n, idx) => {
    if (idx % 2 == 0) {
        console.log(n)
    }
})