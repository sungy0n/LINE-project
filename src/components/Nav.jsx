import React from 'react'
import { gsap } from 'gsap';
import { useRef, useEffect } from 'react';
import line_logo from '../asset/image/Nav_image/line_icon.png'
import lang_icon from '../asset/image/Nav_image/lang_icon.png'
import lang_icon2 from '../asset/image/Nav_image/lang_icon2.svg'

const Nav = ({activeSection, onNavItemClick}) => {

  const navLineRef = useRef(null);
  const navItemRefs = useRef({});

  useEffect(() => {
    const animateNavLine = (item) => {
        if (navLineRef.current && item) {
            const targetItem = navItemRefs.current[item];
            if (targetItem) {
                const targetOffsetLeft = targetItem.offsetLeft;
                const targetWidth = targetItem.offsetWidth;

                gsap.to(navLineRef.current, {
                    width: targetWidth,
                    x: targetOffsetLeft,
                    duration: 0.3,
                    ease: "power2.out",
                });
            }
        }
    };
    
    // activeSection이 변경될 때만 실행 (스크롤 연동)
    if (activeSection) {
        animateNavLine(activeSection);
    }
  }, [activeSection]); // activeSection이 바뀔 때마다 실

  const navItems = [
    "Life on LINE",
    "커뮤니케이션 앱",
    "서비스"
  ];

  const getNavItemClass = (item) => {
    return activeSection === item ? 'active' : '';
  };
  
  const handleClick = (item) => {
    if (onNavItemClick) {
        onNavItemClick(item); 
        
        const targetItem = navItemRefs.current[item];
        if (navLineRef.current && targetItem) {
            const targetOffsetLeft = targetItem.offsetLeft;
            const targetWidth = targetItem.offsetWidth;

            gsap.to(navLineRef.current, {
                width: targetWidth,
                x: targetOffsetLeft,
                duration: 0.3,
                ease: "power2.out",
            });
        }
    }
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
                ref={el => navItemRefs.current[item] = el}
                onClick={() => handleClick(item)} 
            >
                {item}
            </div>
        ))}
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