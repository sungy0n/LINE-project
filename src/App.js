import React from 'react'
import './asset/sass/main.scss'
import Line from './components/Line'
import Nav from './components/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Nav/>
      <Line/>
    </BrowserRouter>
  )
}

export default App
