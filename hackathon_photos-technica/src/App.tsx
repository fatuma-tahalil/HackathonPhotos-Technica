import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profile from './pages/Profile.jsx'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Profile />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
