import React from 'react'
import line_icon from '../../asset/image/line_icon.png'

const Card = () => {
  return (
    <div id="Card_wrap">
        <div id='card' className="line">
            <img src={line_icon} alt="" />
            <div className="text">
                <h1>LINE</h1>
                <p>사람, 정보, 서비스를 연결하는
                    <br />커뮤니케이션 앱
                </p>
            </div>
        </div>
    </div>
  )
}

export default Card