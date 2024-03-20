let a = [1,3,4,5,10,30]

//normal function
function first_even(n) {
    if (n % 2 == 0) {
        return n;
    }
}

var first_even1 = a.find(first_even)
console.log(first_even1)

//function expression
var first_even2 = a.find(function (n) {
    return n % 2 == 0
})
console.log(first_even2)

//arrow function
var first_even3 = a.find((n) => n % 2 == 0)
console.log(first_even3)

console.log(a.some(n => n % 7 == 0))