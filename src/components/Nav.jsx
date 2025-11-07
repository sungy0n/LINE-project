import React from 'react'
import line_logo from '../asset/image/Nav_image/line_logo.png'
import lang_icon from '../asset/image/Nav_image/lang_icon.png'
import lang_icon2 from '../asset/image/Nav_image/lang_icon2.svg'

const Nav = () => {
  return (
    <div id="Nav_wrap">
        <div className="logo">
            <img src={line_logo} alt="" />
        </div>
        <div className="nav_item">
            <div className="info">Life on LINE</div>
            <div className="app">커뮤니케이션 앱</div>
            <div className="service">서비스</div>
        </div>
        <div className="language">
            <img className='lang_icon' src={lang_icon} alt="" />
            KR
            <img className='lang_icon2' src={lang_icon2} alt="" />            
        </div>
    </div>
  )
}

export default Nav