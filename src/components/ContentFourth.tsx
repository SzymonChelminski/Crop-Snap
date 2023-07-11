import React, { useEffect } from 'react';

 const ContentFourth = () => {

    useEffect(() => {

     //Coloring the borders based on xmark or checkmark (Couldn't decide which options should be ticked,so did auto-coloring based on i class, so it auto changes when i decide to change smthing)
      const offerI = document.querySelectorAll('.offer__info span i')

      for (let i = 0; i< offerI.length; i++) {

        if(offerI[i].className === 'fa-regular fa-circle-xmark')
        {
          document.querySelectorAll<HTMLElement>('.offer__info span')[i].style.borderColor = 'red'
        }
        else
        {
          document.querySelectorAll<HTMLElement>('.offer__info span')[i].style.borderColor = 'green'
        }
      
      //sparkles animation
        let index = 0;
        const interval = 1000;
        
        const rand = (min: number, max: number) =>
          Math.floor(Math.random() * (max - min + 1)) + min;
        
        const animate = (star: HTMLElement | Element) => {
          if (star instanceof HTMLElement) {
            star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
            star.style.setProperty("--star-top", `${rand(-40, 80)}%`);
        
            star.style.animation = "none";
            star.getBoundingClientRect();
            star.style.animation = "";
          }
        };
        
        for (const star of document.getElementsByClassName("offer__star")) {
          setTimeout(() => {
            animate(star);
        
            setInterval(() => {
              animate(star);
            }, 1000);
          }, index++ * (interval / 3));
        }
        
    }},[])




  return (
    <div className='content__fourth__outline'>
      <div className='content__container'>
        <div className='content__fourth'>
          <section className='content__fourth__text'>
            <h1 className='content__fourth__text__header'>
              Pick <span className='content__first__header__sparkles'> offer </span>
              that suits you the best!
            </h1>
            <span className='content__fourth__text__description'>
            Make great memes fast with our new meme generator tool. Pick an image, add text to top and bottom and you're done.
            </span>
          </section>
          <div className='content__fourth__pricing__container'>
            <div className='offer__card offer__silver'>
              <div className='offer__header'>
              <span className="offer__sparkles__container">
                <span className="offer__star star__silver">
                  <svg viewBox="0 0 512 512">
                  <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
                  </svg>
                </span>
                <span className="offer__star star__silver">
                  <svg viewBox="0 0 512 512">
                  <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
                  </svg>
                </span>
                <span className="offer__star star__silver">
                  <svg viewBox="0 0 512 512">
                  <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
                  </svg>
                </span>
                <span className="offer__title">
                  Silver
                </span>

              </span>
                <span className='offer__type'>
                  client
                </span>
              </div>
              <div className='offer__pricing'>
                <span className='offer__price'
                >19.99$
                </span>
                <span className='offer__time'>
                  Per Month
                </span>
              </div>
              <div className='offer__info'>
                <span>
                    crop
                    <i className="fa-regular fa-circle-check"></i>
                  </span>
                <span>
                    draw
                    <i className="fa-regular fa-circle-check"></i>
                  </span>
                <span>
                    offset
                    <i className="fa-regular fa-circle-check"></i>
                  </span>
                <span>
                    remove
                    <i className="fa-regular fa-circle-check"></i>
                  </span>
                <span>
                    memes
                    <i className="fa-regular fa-circle-xmark"></i>
                  </span>
                <span>
                    mark
                    <i className="fa-regular fa-circle-xmark"></i>
                  </span>
              </div>
              <button className='offer__button'>
               <span>
                  Order Now
                </span>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            <div className='offer__card offer__gold'>
              <div className='offer__header'>
              <span className="offer__sparkles__container">
                <span className="offer__star star__gold">
                  <svg viewBox="0 0 512 512">
                  <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z"/>
                  </svg>
                </span>
                <span className="offer__star star__gold">
                  <svg viewBox="0 0 512 512">
                  <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z"/>
                  </svg>
                </span>
                <span className="offer__star star__gold">
                  <svg viewBox="0 0 512 512">
                  <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z"/>
                  </svg>
                </span>
                <span className="offer__title">
                  Gold
                </span>
              </span>

                <span className='offer__type'>
                  company
                </span>
              </div>
              <div className='offer__pricing'>
                <span className='offer__price'>
                  49.99$
                </span>
                <span className='offer__time'>
                  Per Month
                </span>
              </div>
              <div className='offer__info'>
                <span>
                    crop
                    <i className="fa-regular fa-circle-check"></i>
                  </span>
                <span>
                    draw
                    <i className="fa-regular fa-circle-check"></i>
                  </span>
                <span>
                    offset
                    <i className="fa-regular fa-circle-check"></i>
                  </span>
                <span>
                    remove
                    <i className="fa-regular fa-circle-check"></i>
                  </span>
                <span>
                    memes
                    <i className="fa-regular fa-circle-check"></i>
                  </span>
                <span>
                    mark
                    <i className="fa-regular fa-circle-xmark"></i>
                  </span>
              </div>
              <button className='offer__button'>
                <span>
                  Order Now
                </span>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
            <div className='offer__card offer__platinum'>
              <div className='offer__header'>
              <span className="offer__sparkles__container">
                <span className="offer__star star__platinum">
                  <svg viewBox="0 0 512 512">
                  <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
                  </svg>
                </span>
                <span className="offer__star star__platinum">
                  <svg viewBox="0 0 512 512">
                  <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
                  </svg>
                </span>
                <span className="offer__star star__platinum">
                  <svg viewBox="0 0 512 512">
                  <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
                  </svg>
                </span>
                <span className="offer__title">
                  Diamond
                </span>
              </span>
                <span className='offer__type'>
                  custom
                </span>
              </div>
              <div className='offer__pricing'>
                <span className='offer__price'>
                  99.99$
                </span>
                <span className='offer__time'>
                  Per order
                </span>
              </div>
              <div className='offer__info'>
                <span>
                    crop
                    <i className="fa-regular fa-circle-check"></i>
                  </span>
                <span>
                    draw
                    <i className="fa-regular fa-circle-check"></i>
                  </span>
                <span>
                    offset
                    <i className="fa-regular fa-circle-check"></i>
                  </span>
                <span>
                    remove
                    <i className="fa-regular fa-circle-check"></i>
                  </span>
                <span>
                    memes
                    <i className="fa-regular fa-circle-check"></i>
                  </span>
                <span>
                    mark
                    <i className="fa-regular fa-circle-check"></i>
                  </span>
              </div>
              <button className='offer__button'>
                <span>
                  Order Now
                </span>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentFourth
