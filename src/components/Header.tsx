import React from 'react'

// Images
import logo from '../images/logo.png'
import crop from '../images/crop.jpg'
import draw from '../images/draw.jpg'
import offset from '../images/offset.jpg'
import remove from '../images/remove.jpg'

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
          <div className='quick__acces__container'>
            <div className='quick__start'>
              <section className='quick__description'>
                <span>
                  Start your jurney with Crop&Snap by developing new project
                </span>
              </section>
              <section className='quick__title title__start'>
                <span>
                  Start a new project
                </span>
              </section>
            </div>
            <div className='quick__edit'>
              <section className='quick__description'>
                <span>
                  Make existing project better with our newest advanced tools
                </span>
              </section>
              <section className='quick__title title__edit'>
                <span>
                  Edit existing project
                </span>
              </section>
            </div>
            <div className='quick__tools'>
              <span>
                Try out new Crop&Snap tools!
              </span>
            </div>
          </div>
          <div className='templates__container'>
            <div className='templates__square'>
              <div className='templates__square__img'>
                <img src={crop} alt="" className='square__img'/>
              </div>
              <div className='templates__sqaure__title'>
                <span>
                  crop
                </span>
              </div>
            </div>
            <div className='templates__square'>
              <div className='templates__square__img'>
                <img src={draw} alt="" className='square__img'/>
              </div>
              <div className='templates__sqaure__title'>
                <span>
                  draw
                </span>
              </div>
            </div>
            <div className='templates__square'>
              <div className='templates__square__img'>
                <img src={offset} alt="" className='square__img'/>
              </div>
              <div className='templates__sqaure__title'>
                <span>
                  offset
                </span>
              </div>
            </div>
            <div className='templates__square'>
              <div className='templates__square__img'>
                <img src={remove} alt="" className='square__img'/>
              </div>
              <div className='templates__sqaure__title'>
                <span>
                  remove
                </span>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}