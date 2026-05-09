import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Button from './components/Button/Button'
import Dashboard from './pages/Dashboard/Dashboard'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'


function App() {
  
  return (
    <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={}/> */}
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
    </BrowserRouter>
  )
   
  
}

export default App
