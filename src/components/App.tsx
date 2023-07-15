import React, { useEffect, useState} from 'react'

// Components
import Header from './Header'
import ContentFirst from './ContentFirst'
import ContentSecond from './ContentSecond'
import ContentThird from './ContentThird'
import ContentFourth from './ContentFourth'
import FooterMobile from './FooterMobile'
import FooterPC from './FooterPC'

export default function App() {

useEffect(() => {

//Content animation - scroll/fade in (content first)

function observer() {
  let obs = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
      if(entry.isIntersecting)
      {
        entry.target.classList.add('show')
      }
      // else
      // {
      //   entry.target.classList.remove('show')
      // }
    })
  })
  
  const hiddenElement = document.querySelectorAll<HTMLElement>('.hidden')
  obs.observe(hiddenElement[0])
}

//Content animation - scroll/fade in (content fourth - cards)

function observerCardsFun() {

  let observerCards = new IntersectionObserver(cards => {

    cards.forEach(card =>{
      if(card.isIntersecting)
      {
        const offerCards = document.querySelectorAll<HTMLElement>('.hidden__card')
        offerCards.forEach(card => {
          card.classList.add('show__card')
        })
      }
    })

  })

  const hiddenCardsContainer = document.querySelector('.hidden__cards__container') as HTMLDivElement
  observerCards.observe(hiddenCardsContainer)
  
}

observer()
observerCardsFun()
},[])

//Screen size check, based on it "FooterMobile" or "FooterPC" will be displayed

const [screenSize, setScreenSize] = useState(window.innerWidth)

setInterval(() => {
  setScreenSize(window.innerWidth)
},500)

  return (
    <div className='app'>
      <Header />
      <ContentFirst />
      <ContentSecond />
      <ContentThird />
      <ContentFourth />
      {screenSize >= 768 ? <FooterPC /> : <FooterMobile />}
    </div>
  )
}