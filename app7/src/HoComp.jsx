import React, { Component } from 'react'

export default class HoComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    increment(){
        this.setState((preState)=>{
            return{count:preState.count+1}
        })
    }
  render() {
    const{count}=this.state
    return (
      <div>
        <button onClick={()=>{this.increment()}}>increment</button>
        <h1>onmousee increment {count}</h1>
      </div>
    )
  }
}
