import React from 'react'

export default function FooterPC() {
  return (
    <div className='footerPC__outline'>
      <div className='footerPC__container'>
        <div className='footerPC__top__elements'>
          <span>
            NEWSLETTER
          </span>
          <span>
            WE'D LOVE TO BE YOUR PARTNER.
          </span>
          <span>
            RATE US
          </span>
        </div>
        <div className='footerPC__bottom__elements'>
          <span className='footerPC__email'>
           <span>stay in touch:</span>
           <input type="text" placeholder='email'/>
          </span>
          <span>CREDITS</span>
          <span>©CHELMINSKI.</span>
          <span>CONTACT</span>
          <span>
            <i className="fa-brands fa-linkedin-in"></i>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
          </span>
        </div>
      </div>
    </div>
  )
}
