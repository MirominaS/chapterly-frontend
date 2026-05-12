import React from 'react'
import './PublicNavbar.css'
import { Link } from 'react-router-dom'

const PublicNavbar = () => {
  return (
    <div className='public-navbar-container'>
        <div className='public-navbar-logo'>Chapterly</div>
        <div className='public-navbar-links'>
            <a href="#features">Features</a>
            <Link to="/login">Login</Link>
            <Link to="/register">Get Started</Link>
        </div>
    </div>
  )
}

export default PublicNavbar