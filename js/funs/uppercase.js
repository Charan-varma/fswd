let names = ["Vito", "Corleone", "Tyler", "Durden", "HI", "WELcome", "heLLO"]

var result = names.map(n => {
    let count = 0
    for (let c of n) {
        if (/[A-Z]/.test(c)){
            count++
        }
    }
    return count
})

console.log(result)