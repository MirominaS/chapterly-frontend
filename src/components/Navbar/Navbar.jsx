import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div>
        <h2 className='navbar-title'>
          Welcome back
        </h2>
        <p className='navbar-subtitle'>
          Track your reading journey today
        </p>
      </div>
      <div className='navbar-profile'>M</div>
    </div>
  )
}

export default Navbar