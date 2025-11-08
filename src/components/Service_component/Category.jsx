import React from 'react'

const Category = ({onCategoryClick, activeCategory}) => {
    const categories = [
    { name: "All Product", class: "all", id: "all" },
    { name: "커뮤니케이션", class: "communication", id: "communication" },
    { name: "엔터테인먼트", class: "enter", id: "enter" },
    { name: "라이프 스타일", class: "life", id: "life" },
    { name: "쇼핑", class: "shop", id: "shop" },
    { name: "핀테크", class: "tech", id: "tech" },
    { name: "비즈니스", class: "business", id: "business" },
    { name: "뉴스", class: "news", id: "news" },
    { name: "게임", class: "game", id: "game" },
  ];

  return (
    <div id="Category_wrap">
        <ul className="category">
            {categories.map(cat=>(
                <li 
                    key={cat.id} 
                    className={`${cat.class} ${activeCategory === cat.id ? 'active' : ''}`} // 선택된 카테고리에 'active' 클래스 추가
                    onClick={() => onCategoryClick(cat.id)} // 클릭 시 부모의 핸들러 호출
                >
                    <span>{cat.name}</span>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Category