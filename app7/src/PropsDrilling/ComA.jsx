import React, { Component } from 'react'
import ComB from './ComB'

export default class ComA extends Component {
  render() {
    return (
      <div>
        ComponentB
        <ComB name1={this.props.name}/>
        
      </div>
    )
  }
}
