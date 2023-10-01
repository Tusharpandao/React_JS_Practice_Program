import React, { Component } from 'react'
import { Main } from './Main'
export default  class Home extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      
       
    }
  }
  render() {
    
      
    return (
      <div >
      <form action="" >

          <table>
             <tr>
              <td>Username</td>
              <td><input type="text"  className='inp1'></input></td>
             </tr>
             <tr>
              <td>Password</td>
              <td><input type="password"  className='inp1' ></input></td>
             </tr>
          </table>
          <input type="submit" value="Login" onSubmit={Main()}  ></input>
      </form>
  </div>
    )
  }
}
