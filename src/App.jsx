import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Tours from './pages/Tours/Tours'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Contact from './pages/Contact/Contact'
import Testiomonial from './pages/Testiomonial/Testiomonial'

function App() {

  return (
    <>
      <NavBar />
      
      <Routes>
        <Route path="*" element={ <Home /> } />
        <Route path="/" element={ <Home /> } />
        <Route path="/tours" element={ <Tours /> } />
        <Route path="testimonial" element={ <Testiomonial /> } />
        <Route path="contactanos" element={ <Contact /> } />
      </Routes>

      <Footer />
    </>
  )
}

export default App
