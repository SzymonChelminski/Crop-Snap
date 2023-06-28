import React from 'react'

// Components
import Header from './Header'
import ContentFirst from './ContentFirst'
import ContentSecond from './ContentSecond'
import ContentThird from './ContentThird'
import ContentFourth from './ContentFourth'

//Content animattion - scroll/fade in

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
  return (
    <div className='app' onLoad={obsever}>
      <Header />
      <ContentFirst />
      <ContentSecond />
      <ContentThird />
      <ContentFourth />
    </div>
  )
}