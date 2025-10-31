import React from 'react'

const Category = () => {
  return (
    <div id="Category_wrap">
        <ul className="category">
            <li className="all">
                <span>All Product</span>
            </li>
            <li className="communication">
                <span>커뮤니케이션</span>
            </li>
            <li className="enter">
                <span>엔터테인먼트</span>
            </li>
            <li className="life">
                <span>라이프 스타일</span>
            </li>
            <li className="shop">
                <span>쇼핑</span>
            </li>
            <li className="tech">
                <span>핀테크</span>
            </li>
            <li className="business">
                <span>비즈니스</span>
            </li>
            <li className="news">
                <span>뉴스</span>
            </li>
            <li className="game">
                <span>게임</span>
            </li>
        </ul>
    </div>
  )
}

export default Category