// App.js (수정된 코드)

import React from 'react'
import './asset/sass/main.scss'
import Nav from './components/Nav'
import Line from './components/Line'
import Footer from './components/Footer'
// Category, Card는 Line 컴포넌트 내에서만 사용되므로 App.js에서는 불필요합니다.
// import Category from './components/Service_component/Category' 
// import Card from './components/Service_component/Card'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'

const App = () => {
  const [activeSection, setActiveSection] = useState('Life on LINE'); 
  const [navClickTarget, setNavClickTarget] = useState(null);

  const handleSetActiveSection = (sectionName) => {
    setActiveSection(sectionName);
  };
  
  const handleNavItemClick = (navItemName) => {
    // Nav 클릭 시, Line이 감지할 수 있도록 target 상태 업데이트
    setNavClickTarget(navItemName);
  };

  return (
    <BrowserRouter>
      {/* 1. Nav에는 클릭 핸들러를 전달 */}
      <Nav activeSection={activeSection} onNavItemClick={handleNavItemClick}/>
      
      {/* 2. Line에는 클릭 타겟과 상태 업데이트 함수를 전달해야 합니다! 👈 이 부분이 누락되었었습니다. */}
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