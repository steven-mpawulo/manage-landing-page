import React from 'react'
import './licontainer.css'

const LiContainer = ({title, message}) => {
  return (
    <div className='li-container'>
        <h2>{title}</h2>
        <p>{message}</p>
    </div>
  )
}

export default LiContainer