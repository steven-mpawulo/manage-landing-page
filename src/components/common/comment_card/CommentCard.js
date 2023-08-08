import React from 'react'
import './commentcard.css'

const CardForComment = ({cardImage, cardTitle, cardMessage}) => {
  return (
    <div className='comment-card'>
        <img src={cardImage} alt="avatar" className='card-image' />,
        <h3>{cardTitle}</h3>
        <p>{cardMessage}</p>
    </div>
  )
}

export default CardForComment