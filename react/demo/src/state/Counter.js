import React from 'react'

export default function Counter() {

  var counter = 1

  function increment() {
    counter++ 
    console.log(counter)
  }
 
  return (
    <>
        <h1>Counter: {counter}</h1>
        <button onClick={increment}>Increment</button>       
    </>
  )
}
