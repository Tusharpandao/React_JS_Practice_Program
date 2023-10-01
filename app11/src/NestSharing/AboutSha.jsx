import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const AboutSha = () => {
  return (
    <div>
        <h1>About page</h1>
        <Header/>
        <Outlet/>
        

    </div>
  )
}

export default AboutSha