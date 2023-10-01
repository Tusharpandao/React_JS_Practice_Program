import React, { Component } from 'react'

export default class Gest  extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Tushar",
         age:23,
         proff:"Softwere engg",
       
      }
    }
  render() {
    return (
      <div>
       <h1> Welcome  {this.state.name}</h1>
       <h2>age {this.state.age}</h2>
       <h3>proff is {this.state.proff}</h3>

      </div>
    )
  }
}
