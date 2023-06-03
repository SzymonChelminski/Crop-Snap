import React from 'react'

//Images
import crop_content_fris from '../images/crop_content_frist.png'

export default function ContentFirst() {
  return (
    <div className='content__first__outline'>
      <div className='content__container'>
        <div className='content__first hidden'>
          <section className='content__first__text'>
            <h1 className='content__first__header'>
              <span>
              <span className='content__first__header__sparkles'>Crop images </span> 
              </span>
              in few seconds!
            </h1>
            <span className='content__first__description'>
              Picture can't fit or overflows the frame?
              Quickly adjust size and proportions of your favourite photos with our <a href="squaretemplates__container" className='description__link'> free to use tools.</a>
            </span>
          </section>
          <div className='content__first__img'>
            <img src={crop_content_fris} alt="cropimg" />
          </div>
        </div>
      </div>
    </div>
  )
}
