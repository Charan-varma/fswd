import React from 'react'
import PropTypes from 'prop-types'

export default function Person(props) {
  return (
    <>
        <h3>{props.name}</h3>
        <h3>{props.age}</h3>
    </>
  )
}

Person.propTypes = {
    name : PropTypes.string.isRequired,
    age : PropTypes.number.isRequired
}
