import React from 'react'

// Images
import logo from '../images/logo.png'

export default function Header() {
  return (
    <div className='header'>
        <div className='navbar'>
          <div className='navbar__elements navbar__brand'>
            <img src={logo} alt="logo" className='navbar__logo'/>
            <span className='navbar__name'>
              Crop&Snap
            </span>
          </div>
          <div className='navbar__elements navbar__settings'>
              <i className="fa-solid fa-bars navbar__bars"/>
              <span className='navbar__logs'>
                <i className="fa-solid fa-user"/>
                login
              </span>
              <span className='navbar__logs navbar__register'>
                register
              </span>
          </div>
        </div>
    </div>
  )
}