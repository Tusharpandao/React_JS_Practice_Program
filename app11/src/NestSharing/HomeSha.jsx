import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from './Header'

const HomeSha = () => {
  return (
    <div>
        <h1>Home page</h1>
        <Header/>
        <Outlet/>

    </div>
  )
}

export default HomeSha