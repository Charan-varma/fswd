import React from 'react'

export default function Interest() {

  function calculate() {
    var amount = document.getElementById("txtAmount").value
    var rate = document.getElementById("txtRate").value
    var interest = amount * rate / 100
    var result = document.getElementById("result")
    result.innerHTML = interest
  } 

  return (
    <>
        <h2>Interest Calculation</h2>
        Amount : <br />
        <input type="number" id="txtAmount" />
        <p></p>
        Interest Rate : <br />
        <input type="number" id="txtRate" />
        <p></p>
        <button onClick={calculate}>Calculate</button>
        <p></p>
        <h3 id="result"></h3>
    </>
  )
}
