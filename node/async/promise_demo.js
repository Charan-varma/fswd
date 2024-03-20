const ps = new Promise( (resolve, reject) => {
    //some operation
    resolve("Done")
    //reject("Error")
} )

async function test() {

    let result = await ps
    console.log(result)

}

//ps.then( v => console.log(v))
//ps.catch( err => console.log(err))

test()