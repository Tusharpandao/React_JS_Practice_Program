import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <h1>About Page</h1>
    <ul>
        <li><Link to={"/home"}>home</Link></li>
        <li><Link to={"/about"}>about</Link></li>
        <li><Link to={"contact"}>contact</Link></li>
    </ul>
    </div>
  )
}

export default About