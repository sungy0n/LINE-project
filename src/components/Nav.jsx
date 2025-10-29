import React from 'react'
import language_icon from '../asset/image/language.svg'

const Nav = () => {
  return (
    <div id="Nav_wrap">
        <div className="logo">
            LINE
        </div>
        <div className="nav_item">
            <div className="info">Life on LINE</div>
            <div className="app">커뮤니케이션 앱</div>
            <div className="service">서비스</div>
        </div>
        <div className="language">
            <img src={language_icon} alt="" />
            KR
        </div>
    </div>
  )
}

export default Nav