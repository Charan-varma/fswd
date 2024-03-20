import React, {useState} from 'react'

function AddQuote({addQuote}) {
    function addNewQuote() {
        let value = document.getElementById("txtQuote").value
        addQuote(value)
    }

    return (

        <>  
          Quote : <input type="text" id="txtQuote" />
          <br />
          <button onClick={addNewQuote}>Add</button>
        </>

    )
     
}

function ListQuotes({quotes, deleteQuote}) {

    function deleteOneQuote(idx) {
        if(window.confirm("Do you want to delete?")) {
            deleteQuote(idx)
        }
    }

    return (
        <>
          <ul>
            {
                quotes.map( (q, idx) => 
                <li key={idx}>
                    {q} <button onClick={() => deleteOneQuote(idx)}>Delete</button>
                </li>)
            }
          </ul>
        </>
    )
    
}


export default function Quotes() {  
   
  let [quotes, setQuotes] = useState(
    ["Life begins after college ends!", "Winners never quit! Quitters never win!"]
  )    

  function addQuote(quote) {
    setQuotes([...quotes, quote])
  }

  function deleteQuote(idxToDelete) {
    setQuotes(quotes.filter( (q, idx) => idx !== idxToDelete ))
  }
    
  return (
    <>
        <h2>Quotes</h2>
        <AddQuote addQuote={addQuote} />
        <p></p>
        <hr />
        <ListQuotes quotes={quotes} deleteQuote={deleteQuote} />
    </>
  )
}
