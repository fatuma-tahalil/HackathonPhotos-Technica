// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'

import Profile from './pages/Profile.jsx'
import PhotoGallery from './pages/PhotoGallery.jsx'
import UploadPost from './pages/UploadPost.jsx'
import PhotoHashtag from './pages/PhotoHashtag.jsx'
//import Login from './pages/Login.jsx'

import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Profile />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/photogallery' element={<PhotoGallery />} >
          <Route path=':urlHashtag' element={<PhotoHashtag/>} />
        </Route>
        <Route path ='/uploadpost' element={<UploadPost/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
