import React, { Component } from 'react'

export default class ShowTimeCC extends Component {

  datetime = new Date().toString()  
  render() {
    return (
      <>
        <h4>{this.datetime}</h4>
        <hr />
      </>
    )
  }
}
