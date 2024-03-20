import React from 'react'

export default function Message(props) {
  return (
    <>
    <h4 style={{"color" : props.color ?? "green", 
                "fontFamily" : "Arial"}}>{props.msg}</h4>
    </>
  )
}
