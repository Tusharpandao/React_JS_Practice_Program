import React, { Component } from 'react'

export default class OnClick extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    incrementCount=()=>{
        this.setState((prevState)=>{
            return{count:prevState.count+1}
        })

    }
  render() {
    const {count,incrementCount}=this.props
    return (
      <div>
        <button onClick={()=>{this.incrementCount()}}>Increment Count {this.state.count}</button>
        {/* <button onClick={()=>{incrementCount}}>Increment Count {this.state.count}</button> */}


      </div>
    )
  }
}
