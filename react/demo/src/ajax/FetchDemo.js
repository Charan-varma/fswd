import React, {useState, useEffect} from 'react'

export default function FetchDemo() {

  let [now, setNow] = useState("")  

  function getDateTime() {
    fetch("http://worldtimeapi.org/api/timezone/Etc/UTC")
        .then(response => response.json())
        .then(data => setNow(data.datetime))      

  } 
  
//   useEffect( () => {
//         async function getNow() {
//             let response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
//             if (response.ok) {
//                 let data = await response.json()
//                 setNow(data.datetime)
//             }
//         }
//         getNow()}, 
//   [])
        
  useEffect( () => {getDateTime()}, [])

  return (
    <>
        <h2>FetchDemo</h2>
        <h1>{now}</h1>
    </>
  )
}
