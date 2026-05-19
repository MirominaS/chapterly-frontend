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
import Books from './pages/Books/Books'
import BookDetails from './pages/BookDetails/BookDetails'
import AddThought from './pages/AddThought/AddThought'
import Thoughts from './pages/Thoughts/Thoughts'
import EditThought from './pages/EditThought/EditThought'
import AddQuote from './pages/AddQuote/AddQuote'
import Quotes from './pages/Quotes/Quotes'
import EditQuote from './pages/EditQuote/EditQuote'
import Analytics from './pages/Analytics/Analytics'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'






function App() {
  
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/books" element={<ProtectedRoute><Books/></ProtectedRoute>}/>
          <Route path="/book-details" element={<ProtectedRoute><BookDetails/></ProtectedRoute>}/>
          <Route path="/add-thought" element={<ProtectedRoute><AddThought/></ProtectedRoute>}/>
          <Route path="/thoughts" element={<ProtectedRoute><Thoughts/></ProtectedRoute>}/>
          <Route path="/edit-thought" element={<ProtectedRoute><EditThought/></ProtectedRoute>}/>
          <Route path="/add-quote" element={<ProtectedRoute><AddQuote/></ProtectedRoute>}/>
          <Route path="/quotes" element={<ProtectedRoute><Quotes/></ProtectedRoute>}/>
          <Route path="/edit-quote" element={<ProtectedRoute><EditQuote/></ProtectedRoute>}/>
          <Route path="analytics" element={<ProtectedRoute><Analytics/></ProtectedRoute>}/>
        </Routes>
    </BrowserRouter>
  )
   
  
}

export default App
