import React, {useState} from 'react'

export default function InterestForm() {

  let [amount, setAmount] = useState(0)  
  let [rate, setRate] = useState(0)  
  let [result, setResult] = useState(0)  

  function changeAmount(event) {
    setAmount(event.target.value)
  }

  function changeRate(event) {
    setRate(event.target.value)
  }

  function calculate(e) {
    e.preventDefault()
    setResult(amount * rate / 100)
  }

  return (
    <>
        <h2>Interest Calculation</h2>
        <form onSubmit={calculate} >
        Amount : <br / >
        <input type="number" onChange={changeAmount} value={amount} />
        <p></p>
        Interest Rate : <br / >
        <input type="number" onChange={changeRate} value={rate} />
        <p></p>
        <button>Calculate</button>
        <p></p>
        {
        result > 0 ? <h3>Interest: {result}</h3> : null
        }
        </form>
    </>
  )
}
