import React from 'react'

// Images
import logo from '../images/logo.png'
import crop from '../images/crop.jpg'
import draw from '../images/draw.jpg'
import offset from '../images/offset.jpg'
import remove from '../images/remove.jpg'

//Animations:

//bars - mobile

function barsFunction(){
  const barsEl = Array.from(document.getElementsByClassName('bars__animation') as HTMLCollectionOf<HTMLElement>)

  // setTimeout(()=>{
  //   barsEl[0].classList.add('bars__animate')
  // },0)
  // setTimeout(()=>{
  //   barsEl[1].classList.add('bars__animate')
  // },250)
  // setTimeout(()=>{
  //   barsEl[2].classList.add('bars__animate')
  // },500)
  // setTimeout(()=>{
  //   barsEl[3].classList.add('bars__animate')
  // },750)

  // barsEl[0].style.zIndex = '6'
  // barsEl[1].style.zIndex = '7'
  // barsEl[2].style.zIndex = '8'
  // barsEl[3].style.zIndex = '9'

  for(let i=0; i<barsEl.length ;i++){
    let barsIndex = [6,7,8,9]
    let barsQue = [0,250,500,750]

    barsEl[i].style.zIndex = `${barsIndex[i]}`
    barsEl[i].style.animationDelay = `${barsQue[i]}ms`
  }

barsEl.forEach(item =>{
    item.classList.add('bars__animate')
  })

setTimeout(()=>{
  barsEl.forEach(item =>{
    item.style.zIndex = '-1'
    item.classList.remove('bars__animate')
  })
},1000)
}

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
            <div className="navbar__bars" onClick={barsFunction}>
                <i className="fa-solid fa-bars"></i>
                <div className="bars__animation__1 bars__animation"></div>
                <div className="bars__animation__2 bars__animation"></div>
                <div className="bars__animation__3 bars__animation"></div>
                <div className="bars__animation__4 bars__animation"></div>
              </div>
              <span className='navbar__logs'>
                <i className="fa-solid fa-user"/>
                login
              </span>
              <span className='navbar__logs navbar__register'>
                  <span>
                    register
                  </span>
                  <div className='navbar__register__color1'></div>
                  <div className='navbar__register__color2'></div>
                  <div className='navbar__register__color3'></div>
                  <div className='navbar__register__color4'></div>
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
                <i className="fa-solid fa-play" />
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
                <i className="fa-solid fa-pen" />
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
            <div className='templates__square drag__drop'>
              <span className='drag__drop__content'>
                add
              <i className="fa-solid fa-paperclip"></i>
                img
              </span>
            </div>
          </div>
        </div>
    </div>
  )
}