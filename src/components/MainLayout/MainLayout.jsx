import React from 'react'
import "./MainLayout.css"
import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../Navbar/Navbar'

const MainLayout = ({children}) => {
  return (
    <div className='main-layout-container'>
        <Sidebar/>
        <div className='main-layout-content'>
            <Navbar/>
            <div className='main-layout-page'>
                {children}
            </div>
        </div>
    </div>
  )
}

export default MainLayout