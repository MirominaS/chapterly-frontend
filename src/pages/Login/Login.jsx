import React from 'react'
import './Login.css'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='login-container'>
      <div className='login-card'>
        <h1 className='login-title'>
          Welcome Back
        </h1>
        <p className='login-subtitle'>
          Continue your reading journey.
        </p>
        <div className='login-form'>
          <Input label="Email" placeholder="Enter your email"/>
          <Input label="Password" placeholder="Enter your password"/>
          <Button text="Login"/>
        </div>
        <p className='login-footer'>
          Don't have an account?
          <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  )
}

export default Login