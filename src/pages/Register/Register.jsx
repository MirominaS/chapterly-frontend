import React from 'react'
import './Register.css'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import { Link, useNavigate } from 'react-router-dom'
import { registerUser } from '../../services/authService'
import { useState } from 'react'

const Register = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({name: '',email:'',password:'',confirmPassword:''})
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = async () => {
    try {
      if(formData.password !== formData.confirmPassword) {
        alert("Password do not match")
      }

      const data = await registerUser({
        name:formData.name,
        email:formData.email,
        password:formData.password
      })

      console.log(data)

      localStorage.setItem('token',data.token)

      navigate('/dashboard')
      
    } catch (error) {
      console.log(error.message)
      alert(error.message)
      
    }
  }

  return (
    <div className='register-container'>
      <div className='register-card'>
        <h1 className='register-title'>Create Account</h1>
        <p className='register-subtitle'>Start your reading journey today</p>

        <div className='register-form'>
          <Input 
            label="Name" 
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <Input 
            label="Email" 
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Input 
            label="Password" 
            placeholder="Enter your password" 
            type='password'
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <Input 
            label="Confirm password" 
            placeholder="Confirm password" 
            type='password'
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <Button 
            text="Create Account"
            onClick={handleSubmit}
          />
        </div>
        <p className='register-footer'>Already have an account?
          <Link to="/login">Login</Link>
        </p>

      </div>
    </div>
  )
}

export default Register 