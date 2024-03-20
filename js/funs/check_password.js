function check_password(pwd) {
    var flag = 0
    if (!/[A-Z]/.test(pwd)) {
        return false
    }
    if (!/[0-9]/.test(pwd)) {
        return false
        
    }
    if (!/[@#*_]/.test(pwd)) {
        return false
    }
    return true
}

console.log(check_password("Abc@#1"))
