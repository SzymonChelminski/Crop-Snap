import React, { useEffect, useState } from 'react'

export default function ContentThird() {

  // Meme Api 

  const [meme, setMeme] = useState()
  const [randomMeme, setRandomMeme] = useState(1)
  const [topText, setTopText] = useState('')
  const [bottomText, setBottomText] = useState('')
  const [fontSize, setFontSize] = useState('')

  useEffect(() => {
    const xhttp = new XMLHttpRequest()

    function getRequest() {
      xhttp.onreadystatechange = getResponse
      
      xhttp.open('GET','https://api.imgflip.com/get_memes')
      xhttp.send()
    }
  
    function getResponse() {
      if(xhttp.readyState === 4 && xhttp.status === 200){
        const response = JSON.parse(xhttp.response)

        setMeme(response.data.memes[randomMeme].url)
      }
    }

    getRequest()
  },[randomMeme])

  function getNewMeme(){
    setRandomMeme(Math.floor(Math.random()*100))
  }

  return (
    <div className='content__third__outline'>
        <div className='content__container'>
            <div className='content__third'>
              <div className='content__third__meme__container'>
                <img src={meme} alt="meme" className='content__third__meme'/>
                <span className='input__text__container'>
                  <h1>{topText}</h1>
                  <h1>{bottomText}</h1>
                </span>
                <button className='content__third__button' onClick={getNewMeme}>
                  get new meme
                </button>
              </div>
              <div className='content__third__inputs'>
                  <span className='content__third__top__input__container'>
                  <span className='content__third__top__text'>
                    Top text:
                  </span>
                  <input type="text" name="top text" className='content__third__input__el' onChange={(e) => {setTopText(e.target.value)}}/>
                  </span>
                <span className='content__third__bottom__input__container'>
                  <span className='content__third__bottom__text'>
                    Bottom text:
                  </span>
                  <input type="text" name="bottom text" className='content__third__input__el' onChange={(e) => {setBottomText(e.target.value)}}/>
                  </span>
                <span className='content__third__font__size__input__container'>
                  <span className='content__third__bottom_font__size'>
                    Font Size:
                  </span>
                  <input type="range" name="font size" min='0.75' max='2' step='0.05' onChange={(e) => {
                    setFontSize(e.target.value)
                    document.querySelector<HTMLSpanElement>('.input__text__container')!.style.fontSize = `${fontSize}em`
                  }}
                  className='content__third__range__input'/>
                </span>
              </div>
                <section className='content__third__text'>
                  Make great memes fast with our new <span className='content__first__header__sparkles'>meme generator</span> tool. Pick an image, add text to top and bottom and you're done.
                </section>
            </div>
        </div>
    </div>
  )
}