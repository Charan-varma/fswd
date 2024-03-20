let names = ["Vito", "Corleone", "Tyler", "Durden"]

let result = names.filter(n => /\w{6}/.test(n))
console.log(result)

let result2 = names.filter(n => {
    let count = 0
    for (let c of n) {
        count++ 
        if (count > 5) {
            return n
        }
    }
})
console.log(result2)