import React from 'react'
import { NavLink } from 'react-router-dom'

const ContactNext = () => {
  return (
    <div>
    <h1>Contact page</h1>
    <ul>
    <li><NavLink to={"/home"}>Home</NavLink></li>
        <li><NavLink to={"/about"}>About</NavLink></li>
        <li><NavLink to={"/contact"}>Contact</NavLink></li>
        <li> <NavLink to={"*"}>Error</NavLink>    </li>
    </ul>
</div>

  )
}

export default ContactNext