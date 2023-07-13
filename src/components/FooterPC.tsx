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
           <span>
            stay in touch:
            </span>
           <input type="text" placeholder='email'/>
          </span>
          <span>
            CREDITS
          </span>
          <span>
            <a href="https://www.linkedin.com/in/szymon-chełmiński-62603b274/" target='blank'>
            ©CHELMINSKI.
            </a>
          </span>
          <span>
            CONTACT
          </span>
          <span>
            <a href="https://www.linkedin.com/in/szymon-chełmiński-62603b274/" target='blank'>
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://www.facebook.com/SzymonChelminski/" target='blank'>
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/i/flow/login?redirect_after_login=%2F%3Flang%3Dpl" target='blank'>
              <i className="fa-brands fa-twitter"></i>
            </a>
          </span>
        </div>
      </div>
    </div>
  )
}
