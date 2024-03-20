function containsDigit(string) {
    
    if (/\d/.exec(string)) {

        var index = /\d/.exec(string).index
        var new_string = string.replace(string.charAt(index),"")

        if (/\d+/.test(new_string)) {
            return true
        }
        else {
            return false
        }
    }

    else {
        return false
    }

}

console.log(containsDigit("Hi2"))
console.log(containsDigit("23456"))
console.log(containsDigit("2Hi3"))
console.log(containsDigit("2Hello3Guest4"))
console.log(containsDigit("@#$%^"))
