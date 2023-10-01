import React, { Component } from 'react'
import Ref from './Ref'

export default class RefParent extends Component {
    constructor(props) {
      super(props)
    this.inputRef=React.createRef()
    }

    clickHandler(){
        this.inputRef.current.focus()
    }
  render() {
    return (
      <div>
        <Ref ref={this.inputRef}/>
        <button onClick={()=>{this.clickHandler()}}>Get Focus</button>
      </div>
)}
}