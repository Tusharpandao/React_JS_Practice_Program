import axios from 'axios'
import React, { Component } from 'react'

export default class PostList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[]
      }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
            console.log(response);
        }).catch((errer)=>{
            console.log(errer);
        })
    }
  render() {
    return (
      <div>
        postlist componentDidMount
      </div>
    )
  }
}
