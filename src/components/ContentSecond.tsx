import React, { useEffect, useState } from 'react'

// images
import rain from '../images/rain.png'
import cloud from '../images/cloud.png'
import mono from '../images/mono.png'
import saturated from '../images/saturated.png'
import sun from '../images/sun.svg'
import wind from '../images/wind.svg'


export default function ContentSecond() {

// arrows 
const [leap, setLeap] = useState(0)

useEffect(() => {
  const pathElements = [...document.querySelectorAll<HTMLElement>('.carousel__element')]

  pathElements.forEach(element =>{
    element.style.right = `${leap}px`
  })
},[leap])

  return (
    <div className='content__secound__outline'>
        <div className='content__container'>
            <div className='content__second'>
                  <span className='content__second__arrows' onClick={(e) => {

                    const clickedElement = e.target as HTMLDivElement;
                    const pathElementLength = document.querySelector<HTMLElement>('.carousel__element')!.offsetWidth

                    if(clickedElement.className === 'fa-solid fa-chevron-left' && leap > 0) {
                      setLeap(prevLeap => prevLeap - (pathElementLength + 20))
                    }
                    else if(clickedElement.className === 'fa-solid fa-chevron-right' && leap <= 549) {
                      setLeap(prevLeap => prevLeap + (pathElementLength + 20))
                    }
    
                  }}>
                    <i className="fa-solid fa-chevron-left" ></i>
                    <i className="fa-solid fa-chevron-right" ></i>
                  </span>
                    <div className='carousel__element'>
                      <section className='carousel__img'>
                        <img src={sun} alt=""/>
                      </section>
                      <section className='carousel__title'>
                        sunny
                      </section>
                    </div>
                    <div className='carousel__element'>
                      <section className='carousel__img'>
                        <img src={rain} alt=""/>
                      </section>
                      <section className='carousel__title'>
                        rainy
                      </section>
                    </div>
                    <div className='carousel__element'>
                      <section className='carousel__img'>
                      <img src={cloud} alt=""/>
                      </section>
                      <section className='carousel__title'>
                        cloudy
                      </section>
                    </div>
                    <div className='carousel__element'>
                      <section className='carousel__img'>
                      <img src={wind} alt=""/>
                      </section>
                      <section className='carousel__title'>
                        windy
                      </section>
                    </div>
                    <div className='carousel__element'>
                      <section className='carousel__img'>
                      <img src={mono} alt=""/>
                      </section>
                      <section className='carousel__title'>
                        mono
                      </section>
                    </div>
                    <div className='carousel__element'>
                      <section className='carousel__img'>
                      <img src={saturated} alt=""/>
                      </section>
                      <section className='carousel__title'>
                        saturated
                      </section>
                    </div>
              </div>
                  <h3 className='theme__text'>
                  Slide to see available<span className='content__second__sparkles'>Themes</span>
                </h3>
                 <div className='content__second__text'>
                    <h1 className='content__second__header'>
                    Get into themes with <span className='content__first__header__sparkles'>templates</span>!
                    </h1>
                   <span className='content__second__description'>
                      Research shows the best parties are the ones with theme clothing. We at Crop&Snap belive the same sticks to images.
                      <span className='slide__info'>
                          (Scroll to see available<span className='content__second__sparkles'>Themes</span>)
                      </span>
                  </span>
            </div>
        </div>
    </div>
  )
}