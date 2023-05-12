import React from 'react'

// Images
import logo from '../images/logo.png'

export default function Header() {
  return (
    <div className='header'>
        <nav className='navbar'>
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
        </nav>
        <div className='content__container'>
          <section className='text'>
            <h1 className='text__header'>
              Looking to improve quality of your images without much effort?
            </h1>
            <p className='text__description'>
              Welcome to Crop&Snap, a place where perfection meets with ease. Are you just searching for a quick photo-editing site? Your friends recommended it, or mayby u stumbled upon this page randomly?
              No worries, with Crop&Snap you can explore the world of photography from different view, we up here like to do things our way, make sad photos come alive or do some minor enhancements! 
            </p>
          </section>
        </div>
    </div>
  )
}