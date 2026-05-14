import React from 'react'
import './Register.css'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='register-container'>
      <div className='register-card'>
        <h1 className='register-title'>Create Account</h1>
        <p className='register-subtitle'>Start your reading journey today</p>

        <div className='register-form'>
          <Input label="Name" placeholder="Enter your name"/>
          <Input label="Email" placeholder="Enter your email"/>
          <Input label="Password" placeholder="Enter your password" type='password'/>
          <Input label="Confirm password" placeholder="Confirm password" type='password'/>
          <Button text="Create Account"/>
        </div>
        <p className='register-footer'>Already have an account?
          <Link to="/login">Login</Link>
        </p>

      </div>
    </div>
  )
}

export default Register 