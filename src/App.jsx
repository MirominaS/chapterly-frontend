import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import LandingPage from './pages/LandingPage/LandingPage'

import StatCard from './components/StatCard/StatCard'
import ProgressBar from './components/ProgressBar/ProgressBar'
import BookCard from './components/BookCard/BookCard'
import Loader from './components/Loader/Loader'
import EmptyState from './components/EmptyState/EmptyState'
import Modal from './components/Modal/Modal'
import Sidebar from './components/Sidebar/Sidebar'
import Navbar from './components/Navbar/Navbar'
import MainLayout from './components/MainLayout/MainLayout'
import PublicNavbar from './components/PublicNavbar/PublicNavbar'
import Books from './pages/Books/Books'
import BookDetails from './pages/BookDetails/BookDetails'
import AddThought from './pages/AddThought/AddThought'



function App() {
  
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/books" element={<Books/>}/>
          <Route path="/book-details" element={<BookDetails/>}/>
          <Route path="/add-thought" element={<AddThought/>}/>
        </Routes>
    </BrowserRouter>
  )
   
  
}

export default App
