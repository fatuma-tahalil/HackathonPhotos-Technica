import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/config.ts';

import Navbar from './components/Navbar.jsx'
import Profile from './pages/Profile.jsx'
import PhotoGallery from './pages/PhotoGallery.jsx'
import UploadPost from './pages/UploadPost.jsx'
import PhotoAlbum from './pages/PhotoAlbum.jsx'
import Login from './pages/Login.jsx'

import "./css/App.css";

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      try {
        setUser(user);
        setLoading(false);
      }
      catch {
        console.error("Error catching user authentication change");
      }
    });
    return unsubscribe;
  }, []);

  return { user, loading };
};

function App() {
  const { user, loading } = useAuth();
  if (loading) {
    return(<div>Loading...</div>);
  }
  return (
    <BrowserRouter>
      {/* If User logged in we load photos */}
      {user ? (
        <>
          <Navbar />
          <Routes>
            {/* We pass user object as a prop into the pages that need it */}
            <Route path='/profile' element={<Profile user={user} />} />
            <Route path='/photogallery' element={<PhotoGallery />} >
              <Route path=':urlHashtag' element={<PhotoAlbum/>} />
            </Route>
            <Route path ='/uploadpost' element={<UploadPost/>} />
          </Routes>
        </>
      ) : (
        /* If user not logged in they are forced to login */
        <Routes>
          <Route path='*' element={<Login />} />
        </Routes>
      )}
    </BrowserRouter>
  )
}

export default App
