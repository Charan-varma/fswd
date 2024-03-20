function wish(msg, ...names) {
    for (let n of names) {
        console.log(msg, n)
    }
}

wish("Hi", "Larry", "Sergy")