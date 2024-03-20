function fun(a, b, c) {
    console.log(a, b, c)
}

let a = [10, 20, 30]

fun(a)
fun(a[0], a[1], a[2])
fun(...a)
fun(...[10, 20])