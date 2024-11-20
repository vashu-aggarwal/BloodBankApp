import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

const Layout = ({children}) => {
  return (
    <>
      <div className='header'><Header/></div>
      <div className='row g-0'>
      <div style={{width:"21%"}}>
        <Sidebar/>
      </div>
      <div style={{width:"79%"}}>{children}</div>
      </div>
    </>
  )
}

export default Layout
