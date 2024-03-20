function even_first(...nums) {
    let even = []
    let odd = []
    for (let n of nums) {
        if (n % 2 == 0) {
            even.push(n)
        }
        else {
            odd.push(n)   
        }
    } 
    let a = [...even, ...odd]
    return a
}

console.log(even_first(1,2,3,4,5,6))
