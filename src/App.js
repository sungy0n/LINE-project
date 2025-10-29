import React from 'react'
import Line from './components/Line'
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Line/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
