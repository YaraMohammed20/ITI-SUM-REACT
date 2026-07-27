import { useState } from 'react'

import './App.css'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import About from './components/About/About'

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Footer/>
      
    </>
  )
}

export default App
