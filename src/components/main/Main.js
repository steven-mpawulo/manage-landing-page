import React from 'react'
import Illustration from '../../images/illustration-intro.svg'
import './main.css'
import Button from '../common/button/Button'

const Main = () => {
  return (
    <main>
      <div className='main'>
      <div className="first-section">
        <div className="first-section-left">
          <h1>Bring everyone together to build better products</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ducimus sit, maxime alias et veritatis praesentium eos! Voluptatem a perspiciatis ipsa sapiente facilis doloribus, modi placeat dignissimos distinctio error voluptatibus.</p>
          
          <Button buttonText={"Get Started"} className="button-inner"/>
        </div>
        <div className="first-section-right">
          <img src={Illustration} alt="illustration-intro" className='illustration' />
        </div>
      </div>
    </div>
    </main>
  )
}

export default Main