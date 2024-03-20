import React, {useState} from 'react'

export default function Languages() {
  
  let [langs, setLangs] = useState([])

  function addLang() {
    let lang = document.getElementById("txtLang").value    
    var same = 1

    for (let l of langs) {
        if (l === lang) {
            same = 0
            break
        }
        
    }

    if (same === 1) {
        setLangs([...langs, lang])
    }
    else {
        alert("Sorry! Language already present!!!")
    }

  }

  function delLang() {
    let lang = document.getElementById("txtLang").value  
    setLangs(langs.filter( l => l !== lang))
  }

  function reset() {
    setLangs([])
  }

  return (
    <>
        <h2>Languages</h2>
        Language : <input type="text" id="txtLang" />
        <p></p>
        <button onClick={addLang}>Add</button>
        <button onClick={delLang}>Delete</button>
        <button onClick={reset}>Reset</button>
        <ul>
            {
                langs.map( lang => <li>{lang}</li>)
            }
        </ul>
    </>
  )
}
