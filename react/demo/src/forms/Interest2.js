import React, { Component } from 'react'

export default class Interest2 extends Component {

  render() {
    
    function calculate(e) {
        console.log(e)
        e.preventDefault()
        var amount = document.getElementById("txtAmount").value
        var rate = document.getElementById("txtRate").value
        var interest = amount * rate / 100
        var result = document.getElementById("result")
        result.innerHTML = interest
    } 

    return (
      <>
        <h1>Interest Calculation</h1>
        <form onSubmit={calculate}>
            Amount : <br />
            <input type="number" id="txtAmount" required/>
            <p></p>
            Interest Rate : <br />
            <input type="number" id="txtRate" required/>
            <p></p>
            <button>Calculate</button>
            <p></p>
            <h3 id="result"></h3>
        </form>
      </>
    )
  }
}
