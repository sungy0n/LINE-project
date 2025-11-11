import React from 'react'
import './asset/sass/main.scss'
import Nav from './components/Nav'
import Line from './components/Line'
import Footer from './components/Footer'
import Category from './components/Service_component/Category'
import Card from './components/Service_component/Card'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'

const App = () => {
  // 현재 활성화된 섹션 상태 (기본값: Life on LINE)
  const [activeSection, setActiveSection] = useState('Life on LINE'); 

  // Line 컴포넌트에 전달할 상태 업데이트 함수
  const handleSetActiveSection = (sectionName) => {
    setActiveSection(sectionName);
  };

  return (
    <BrowserRouter>
      <Nav activeSection={activeSection}/>
      <Line onSetActiveSection={handleSetActiveSection}/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
