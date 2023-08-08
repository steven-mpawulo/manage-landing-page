import React from 'react'

const CommentCard = ({cardImage, cardTitle, cardMessage}) => {
  return (
    <div className='comment-card'>
        <img src={cardImage} alt="avatar" className='card-image' />,
        <h3>{cardTitle}</h3>
        <p>{cardMessage}</p>
    </div>
  )
}

export default CommentCard