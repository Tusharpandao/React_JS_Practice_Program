


import React, { Component } from 'react'

export default class LifeCycle extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"john"
      }
      console.log("lifecycle of constructor");
    }
    static getDetDerivesStateFromProps(props,state){
        console.log("life cycle getDetDerivesStateFromProps");
        return null;  
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("lifeCycle  getSnapshotBeforeUpdate ");
        return true;

    }
    componentDidUpdate(){
        console.log("lifeCycle componentDidUpdate ");
    }
    catchHandel(){
        this.setState({
            name:"jay"
        })
    }
  render() {
    return (
      <div>
        <h1 onClick={()=>{this.catchHandel()}}>{this.state.name}</h1>
      </div>
    )
  }
}
