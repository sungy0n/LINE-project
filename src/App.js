import React from 'react'
import './asset/sass/main.scss'
import Nav from './components/Nav'
import Line from './components/Line'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Nav/>
      <Line/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
