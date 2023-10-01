import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
const Contact = () => {
  return (
    <div>
      <h1>Contact page</h1>
    <Header/>
    <Outlet/>
      
    </div>
  )
}

export default Contact