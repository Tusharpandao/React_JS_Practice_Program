import React from 'react'
import { NavLink } from 'react-router-dom'

const Contact2 = () => {
  return (
    <div>
        <h1>Contact 2 page</h1>
        <ul>
            <li><NavLink to={"/home"}>Home</NavLink></li>
            <li><NavLink to={"/about"}>About</NavLink></li>
            <li><NavLink to={"/contact"}>Contact</NavLink></li>
        </ul>

    </div>
  )
}

export default Contact2