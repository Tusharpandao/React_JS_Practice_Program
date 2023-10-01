import React from 'react'
import { NavLink } from 'react-router-dom'
const ErrorNes = () => {
  return (
    <div>
    <h1>Error 404  page Not Found Try again</h1>
    <ul>
    <li><NavLink to={"/home"}>Home</NavLink></li>
        <li><NavLink to={"/about"}>About</NavLink></li>
        <li><NavLink to={"/contact"}>Contact</NavLink></li>
        <li> <NavLink to={"/error"}>Error</NavLink>    </li>
    </ul>
</div>

  )
}

export default ErrorNes