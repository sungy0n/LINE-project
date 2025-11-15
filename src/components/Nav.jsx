import React from 'react'
import { gsap } from 'gsap';
import { useRef, useEffect } from 'react';
import line_logo from '../asset/image/Nav_image/line_icon.png'
import lang_icon from '../asset/image/Nav_image/lang_icon.png'
import lang_icon2 from '../asset/image/Nav_image/lang_icon2.svg'

const Nav = ({ activeSection, onNavItemClick }) => {

  const navLineRef = useRef(null);
  const navItemRefs = useRef({});

  useEffect(() => {
    const animateNavLine = (item) => {
      if (!item) return;
      const target = navItemRefs.current[item];
      if (!target || !navLineRef.current) return;

      gsap.to(navLineRef.current, {
        width: target.offsetWidth,
        x: target.offsetLeft,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    animateNavLine(activeSection);
  }, [activeSection]);


  const navItems = [
    { label: "Life on LINE", section: "section1" },
    { label: "커뮤니케이션 앱", section: "section3" },
    { label: "서비스", section: "section4" },
  ];


  // ⭐ 클릭 시 즉시 nav_line 이동 + 해당 섹션으로 스크롤
  const handleClick = (section, label) => {

    // 1) nav_line 즉시 이동
    const target = navItemRefs.current[label];
    if (navLineRef.current && target) {
      gsap.to(navLineRef.current, {
        width: target.offsetWidth,
        x: target.offsetLeft,
        duration: 0.3,
        ease: "power2.out",
      });
    }

    // 2) 부모(Line.js)의 스크롤 함수 호출 → section3, section4 등으로 이동
    if (onNavItemClick) {
      onNavItemClick(section);
    }
  };


  return (
    <div id="Nav_wrap">
      <div className="logo">
        <img src={line_logo} alt="" />
      </div>

      <div className="nav_item">
        <div className="nav_line" ref={navLineRef}></div>

        {navItems.map(({ label, section }) => (
          <div
            key={label}
            className={`info ${activeSection === label ? "active" : ""}`}
            ref={(el) => (navItemRefs.current[label] = el)}
            onClick={() => handleClick(section, label)}
          >
            {label}
          </div>
        ))}
      </div>

      <div className="language">
        <img className='lang_icon' src={lang_icon} alt="" />
        KR
        <img className='lang_icon2' src={lang_icon2} alt="" />            
      </div>
    </div>
  );
};

export default Nav;