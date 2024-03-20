import React, { Component } from 'react'

export default class MessageCC extends Component {
  render() {
    // console.log(this.props)
    return (
      <>
        <h1 style={{color : this.props.color}}>{this.props.msg}</h1>
      </>
    )
  }
}
