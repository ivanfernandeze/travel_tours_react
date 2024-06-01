import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'

function App() {

  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/sobre-nosotros">Sobre Nosotros</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="sobre-nosotros" element={ <div>Esto es sobre nosotros</div> } />
        <Route path="contacto" element={ <div>Esto es contactanos</div> } />
      </Routes>
    </>
  )
}

export default App
