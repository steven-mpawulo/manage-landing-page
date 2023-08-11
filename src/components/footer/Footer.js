import React from 'react'
import "./footer.css"
import Logo from '../../images/logo.svg'
import FacebookIcon from '../../images/icon-facebook.svg'
import YoutubeIcon from '../../images/icon-youtube.svg'
import TwitterIcon from '../../images/icon-twitter.svg'
import PinterestIcon from '../../images/icon-pinterest.svg'
import InstagramIcon from '../../images/icon-instagram.svg'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="fourth-section">
          <p>Simplify how your team <span>works today</span></p>
          <button className='fourth-container-button'>Get Started</button>
      </div>
      <footer>
        <div className="footer-first-container">
          <div className="container-for-logo">
          <img src={Logo} alt="logo" className='logo'/>
          </div>

          <div className="container-for-icons">
          <img src={FacebookIcon} alt="facebook-icon" />
          <img src={TwitterIcon} alt="twitter-con" />
          <img src={YoutubeIcon} alt="youtube-icon" />
          <img src={PinterestIcon} alt="pinterest-icon" />
          <img src={InstagramIcon} alt="instagram-icon" />
          </div>


        </div>
        <div className="footer-second-container">
          <ul>
            <li>Home</li>
            <li>Pricing</li>
            <li>Products</li>
            <li>About Us</li>
          </ul>
        </div>
        <div className="footer-third-container">
          <ul>
            <li>Careers</li>
            <li>Community</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-fourth-container">
          <div className="container-for-input">
          <input type="email" placeholder='johndoe@gmail.com' />
          <button>Go</button>
          </div>
          <p>&copy; 2023. All Rights Reserved</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer