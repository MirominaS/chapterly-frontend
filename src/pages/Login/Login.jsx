import React, { useState } from 'react'
import './Login.css'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../../services/authService'
const Login = () => {
  
  const navigate = useNavigate();

  const [formData, setFormData] = useState({email: '', password: ''});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = async () => {
    try {
      const data = await loginUser(formData)
      localStorage.setItem('token',data.token)
      navigate('/dashboard')
    } catch (error) {
      console.log(error.message)
      alert(error.message)
    }
  }

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
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <Button text="Login" onClick={handleSubmit}/>
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