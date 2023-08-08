import React from 'react'
import Logo from '../../images/logo.svg'

const Header = () => {
  return (
    <header>
        <div className="header">
            <img src={Logo} alt="logo" />
            <ul>
                <li><a href="#Pricing">Pricing</a></li>
                <li><a href="#Product">Product</a></li>
                <li><a href="#AboutUs">About Us</a></li>
                <li><a href="#Careers">Careers</a></li>
                <li><a href="Community">Community</a></li>
            </ul>
            <button className='get-started-button'>Get Started</button>
        </div>
    </header>
    
  )
}

export default Header