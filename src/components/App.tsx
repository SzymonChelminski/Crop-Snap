import React, { useState} from 'react'

// Components
import Header from './Header'
import ContentFirst from './ContentFirst'
import ContentSecond from './ContentSecond'
import ContentThird from './ContentThird'
import ContentFourth from './ContentFourth'
import FooterMobile from './FooterMobile'
import FooterPC from './FooterPC'

//Content animation - scroll/fade in

function obsever() {
  let observer = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        entry.target.classList.add('show')
      }
      else{
        entry.target.classList.remove('show')
      }
    })
  })
  
  const hiddenElement = Array.from(document.getElementsByClassName('hidden') as HTMLCollectionOf<HTMLElement>)
  observer.observe(hiddenElement[0])
}

export default function App() {

//Screen size check, based on it "FooterMobile" or "FooterPC" will be displayed

const [screenSize, setScreenSize] = useState(window.innerWidth)

setInterval(() => {
  setScreenSize(window.innerWidth)
},500)

  return (
    <div className='app' onLoad={obsever}>
      <Header />
      <ContentFirst />
      <ContentSecond />
      <ContentThird />
      <ContentFourth />
      {screenSize >= 768 ? <FooterPC /> : <FooterMobile />}
    </div>
  )
}