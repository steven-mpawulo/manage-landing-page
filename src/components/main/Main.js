import React from 'react'
import Illustration from '../../images/illustration-intro.svg'
import './main.css'
import Button from '../common/button/Button'
import LiContainer from '../common/li_container/LiContainer'
import CardForComment from '../common/comment_card/CommentCard'
import AvatarAli from '../../images/avatar-ali.png'
import AvatarAnisha from '../../images/avatar-anisha.png'
import AvatarRichard from '../../images/avatar-shanai.png'


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
      <div className="second-section">
        <div className="second-section-left">
          <h2>What's different about manage?</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus error, cupiditate recusandae quis nisi ullam harum praesentium, labore explicabo veniam facere vero reprehenderit sunt! Corporis voluptas vel facere? Magnam, quod.</p>
        </div>
        <div className="second-section-right">
          <ol>
            <li><LiContainer title={"Track company-wide progress"}/></li>
            <li><LiContainer title={"Advanced built-in reports"}/></li>
            <li><LiContainer title={"Everything you need in one place"}/></li>
          </ol>
        </div>
      </div>
      <div className="third-section">
        <h3>What they've said</h3>
        <div className="wrapper-for-comments">
          <CardForComment cardImage={AvatarAnisha} cardTitle={"Anisha Li"} cardMessage={"Your welcome"}/>
          <CardForComment cardImage={AvatarAli} cardTitle={"Ali Bravo"} cardMessage={"Your welcome"}/>
          <CardForComment cardImage={AvatarRichard} cardTitle={"Richard Watts"} cardMessage={"Your welcome"}/>
        </div>
      </div>
    </div>
    </main>
  )
}

export default Main