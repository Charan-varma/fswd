function upper_case(...names) {
    var count = 0
    for (let n of names) {
        for (let c of n) {
            if (/[A-Z]/.test(c)) {
                count++
            }
        }
    }
    return count
}

console.log(upper_case("JAVA", "Python", "C++", "JavaScript"))