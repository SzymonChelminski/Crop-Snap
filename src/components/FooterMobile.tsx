import React, { useEffect } from 'react'

export default function Footer() {

    useEffect(() => {
        
        const header = document.querySelector<HTMLElement>('.footer__top__header'),
              button = document.querySelector<HTMLElement>('.footer__top__button'),
              links = document.querySelector<HTMLElement>('.footer__bottom__links'),
              icons = document.querySelector<HTMLElement>('.footer__bottom__icons')

             header!.animate(
                [
                    {
                        top: '4px',
                        left: '-3px',
                        transform: 'rotate(-2deg)',
                        
                    },
                    {
                        top: '-6px',
                        left: '0px',
                        transform: 'rotate(-2deg)',
                    },
                    {
                        top: '-6px',
                        left: '0px',
                        transform: 'rotate(1deg)',
                    },
                    {
                        top: '4px',
                        left: '-3px',
                        transform: 'rotate(-2deg)'
                    }
                ],
                {
                    duration: 2500,
                    iterations: Infinity
                }
            )
    
            button!.animate(
                [
                    {
                        top: '4px'
                    },
                    {
                        top: '-7px'
                    },
                    {
                        top: '4px'
                    }
                ],
                {
                    duration: 2000,
                    iterations: Infinity,
                    delay: 250
                }
            )
    
            links!.animate(
                [
                    {
                        top: '4px',
                        transform: 'rotate(5deg)'
                    },
                    {
                        top: '-4px',
                        transform: 'rotate(-2deg)'
                    },
                    {
                        top: '4px',
                        transform: 'rotate(5deg)'
                    }
                ],
                {
                    duration: 1750,
                    iterations: Infinity,
                    delay: 500
                }
            )
    
            icons!.animate(
                [
                    {
                        top: '4px',
                        transform: 'rotate(3deg)'
                    },
                    {
                        top: '-4px',
                        transform: 'rotate(-3deg)'
                    },
                    {
                        top: '4px',
                        transform: 'rotate(3deg)'
                    }
                ],
                {
                    duration: 2250,
                    iterations: Infinity,
                    delay: 750
                }
            )

    },[])


  return (
    <div className='footer__container'>
        <div className='footer__top__content'>
            <div>
            <h1 className='footer__top__header'>
                We'd love to work for you!
            </h1>
            <button className='footer__top__button'>
                Get in touch
                <i className="fa-solid fa-arrow-right"></i>
            </button>
            </div>
        </div>
        <div className='footer__bottom__content'>
            <div className='footer__bottom__links'>
                <ul>
                    <li>contact</li>
                    <li>privacy</li>
                    <li>bugs</li>
                    <li>works</li>
                </ul>
            </div>
            <div className='footer__bottom__icons'>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-linkedin-in"></i>
            </div>
        </div>
    </div>
  )
}
