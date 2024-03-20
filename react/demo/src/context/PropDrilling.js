import React from 'react'

export default function PropDrilling() { 
  let details = { course : "React", trainer : "Srikanth"}  
  return (
    <>
        <h1>Parent</h1>
        <Child details={details} />
    </>
  )
}

function  Child(props) {
    return (
        <>  
            <h2>This is Child</h2>
            <GrandChild details={props.details} />
        </>
    )

}

function GrandChild(props) {
    return (
        <>
            <h2>This is GrandChild</h2>
            <h4>Course : {props.details.course}</h4>
            <h4>trainer : {props.details.trainer}</h4>
        </>
    )
}
