function fun(task, value) {
    task(value)
}

function print(msg) {
    console.log(msg)
}

function process(msg) {
    console.log("Processing ", msg)
}

fun(print, "Hello")
fun(process,"order")
fun((msg) => console.log(msg), "Arrow")
fun((msg) => console.log("Arrow", msg), "order")