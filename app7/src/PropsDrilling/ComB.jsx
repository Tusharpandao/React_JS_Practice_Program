import React, { Component } from 'react'
import ComC from './ComC'

export default class ComB extends Component {
  render() {
    return (
      <div>
        ComponentB
        <ComC name3={this.props.name1}/>
      </div>
    )
  }
}
