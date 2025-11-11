import React from 'react'
import { gsap } from 'gsap'; // GSAP import
import { useRef, useEffect } from 'react';
import line_logo from '../asset/image/Nav_image/line_icon.png'
import lang_icon from '../asset/image/Nav_image/lang_icon.png'
import lang_icon2 from '../asset/image/Nav_image/lang_icon2.svg'

const Nav = ({activeSection}) => {

  //Nav바 nav_line 애니메이션
  const navLineRef = useRef(null); // nav_line 요소를 참조하기 위한 ref
  const navItemRefs = useRef({}); // nav_item들을 참조하기 위한 ref

  useEffect(() => {
    if (navLineRef.current && activeSection) {
      const targetItem = navItemRefs.current[activeSection];
      if (targetItem) {
        const navItemsContainer = targetItem.parentNode;
        const targetOffsetLeft = targetItem.offsetLeft;
        const targetWidth = targetItem.offsetWidth;

        gsap.to(navLineRef.current, {
          width: targetWidth,
          x: targetOffsetLeft, // x 속성은 transform: translateX()를 사용합니다.
          duration: 0.3, // 애니메이션 속도
          ease: "power2.out",
        });
      }
    }
  }, [activeSection]); // activeSection이 변경될 때마다 실행

  const navItems = [
    "Life on LINE",
    "커뮤니케이션 앱",
    "서비스"
  ];

  const getNavItemClass = (item) => {
    return activeSection === item ? 'active' : '';
  };

  return (
    <div id="Nav_wrap">
        <div className="logo">
            <img src={line_logo} alt="" />
        </div>
        <div className="nav_item">
          <div className="nav_line" ref={navLineRef}></div>
          {navItems.map((item) => (
            <div
                key={item}
                className={`info ${getNavItemClass(item)}`}
                ref={el => navItemRefs.current[item] = el} // Ref 설정
            >
                {item}
            </div>
        ))}
          {/* <div className="info">Life on LINE</div>
          <div className="app">커뮤니케이션 앱</div>
          <div className="service">서비스</div> */}
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