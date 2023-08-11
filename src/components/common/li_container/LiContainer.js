import React from 'react'
import './licontainer.css'

const LiContainer = ({title, message, number}) => {
  return (
    <div className='li-container'>
      <div className="li-first-container">
      <div className="number-for-container">
        <p>{number}</p>
      </div>
        <h2>{title}</h2>
      </div>
        <p>{message}</p>
    </div>
  )
}

export default LiContainer