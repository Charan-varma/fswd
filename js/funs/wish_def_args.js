function wish(msg = "Hi", user = "Guest") {
    console.log(`${msg} ${user}`)
}

wish("Hello")
wish("Hello", "Bill")
wish()
wish(undefined)