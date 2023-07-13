import React from 'react'

export default function FooterMobile() {
  return (
    <div className='footerMobile__container'>
        <h1>WE'D LOVE TO WORK FOR YOU.</h1>
        <div>
            <p>CONTACT</p>
            <p>PRICING</p>
            <p>CREDITS</p>
            <a href="https://www.linkedin.com/in/szymon-chełmiński-62603b274/" target='blank'>
            ©CHELMINSKI.
            </a>
        </div>
        <div>
            <a href="https://www.linkedin.com/in/szymon-chełmiński-62603b274/" target='blank'>
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://www.facebook.com/SzymonChelminski/" target='blank'>
              <i className="fa-brands fa-facebook-f"></i>
              </a>
            <a href="https://twitter.com/i/flow/login?redirect_after_login=%2F%3Flang%3Dpl" target='blank'>
              <i className="fa-brands fa-twitter"></i>
              </a>
        </div>
    </div>
  )
}
