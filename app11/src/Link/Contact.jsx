import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div><h1>Contact page</h1>


<ul>
<li><Link to={"/home"}>home</Link></li>
        <li><Link to={"/about"}>about</Link></li>
        <li><Link to={"/contact"}>contact</Link></li>
    </ul>   

    </div>
  )
}

export default Contact