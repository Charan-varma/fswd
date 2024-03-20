import React, {useContext} from 'react'

const MyContext = React.createContext() 

export default function FunctionDemo() {
  let details = {course : "React", trainer : "Srikanth"}
  return (
    <MyContext.Provider value={details}>
        <h1>Parent</h1>
        <Child />
    </MyContext.Provider>
  )
}

function Child() {
    return (
        <>
             <h2>Child</h2>
            <GrandChild />
        </>
    )
}

function GrandChild() {
    const details = useContext(MyContext)
    return (
        <>
            <h2>GrandChild</h2>
            <h3>Course : {details.course}</h3>
            <h3>Trainer : {details.trainer}</h3>
        </>
    )

}