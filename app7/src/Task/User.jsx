import React, { Component } from 'react'

export default class User extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Rupesh",
         age:23,
         Proff:"DBA"
      }
    }
  render() {
    return (
      <div>
        <h1>Welcome {this.state.name}</h1>
        <h2>Age is {this.state.age}</h2>
        <h2>Proffe {this.state.Proff}</h2>

      </div>
    )
  }
}
