import React from 'react'

function DisplayTime() {

    var title = "Events Demo"

    function showDateTime() {
        alert(new Date().toString())
    }

    return (
    
    <>
        <h1>{title}</h1>
        <h4>Click on the button below to get date and time</h4>
        <button onClick={showDateTime}>Click Here</button>
    </>
  )
}

export default DisplayTime