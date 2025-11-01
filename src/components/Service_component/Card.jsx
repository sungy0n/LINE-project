import React from 'react'

const Card = ({icon_img, title, description}) => {
  return (
    <div id="Card_wrap">
        <div id='card' className="line">
            <img src={icon_img} alt="" />
            <div className="text">
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    </div>
  )
}

export default Card