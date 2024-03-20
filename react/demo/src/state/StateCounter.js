import React, {useState} from 'react'

export default function StateCounter() {

  let org = 1  
  let [counter, setCounter] = useState(org) 

  function increment() {
    setCounter(counter + 1)
  }

  function decrement() {
    if (counter <= org) {
        alert("Sorry! Cannot decrement counter anymore")
    }
    else {
        setCounter(counter - 1)
    }
  }  

  function reset() {
    setCounter(org)
  }

  return (
    <>
        <h2>Counter : {counter}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </>
  )
}
