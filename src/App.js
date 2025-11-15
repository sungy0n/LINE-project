import React from 'react'
import './asset/sass/main.scss'
import Nav from './components/Nav'
import Line from './components/Line'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'

const App = () => {
  const [activeSection, setActiveSection] = useState('Life on LINE'); 
  const [navClickTarget, setNavClickTarget] = useState(null);

  const handleSetActiveSection = (sectionName) => {
    setActiveSection(sectionName);
  };
  
  const handleNavClick = (section) => {
  const target = document.getElementById(section);
  if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };
 

  return (
    <BrowserRouter>
      <Nav activeSection={activeSection} 
            onNavItemClick={handleNavClick} />
      <Line 
          onSetActiveSection={handleSetActiveSection}
          navClickTarget={navClickTarget} 
          setNavClickTarget={setNavClickTarget}
      />
      <Footer/>
    </BrowserRouter>
  )
}

export default App