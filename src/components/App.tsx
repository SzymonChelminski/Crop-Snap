import React, { useEffect, useState} from 'react'

// Components
import Header from './Header'
import ContentFirst from './ContentFirst'
import ContentSecond from './ContentSecond'
import ContentThird from './ContentThird'
import ContentFourth from './ContentFourth'
import FooterMobile from './FooterMobile'
import FooterPC from './FooterPC'
import ImageEditor from './ImageEditor'
import Prompt from './Prompt'

//filerbot library
import FilerobotImageEditor, {
  TABS,
  TOOLS,
} from 'react-filerobot-image-editor';

export default function App() {

//filerbot


const [imgUrl, setImgUrl] = useState('')
const [promptDisplay, setPromptDisplay] = useState('-100%')
const [inputValue, setInputValue] = useState('')

const [isImgEditorShown, setIsImgEditorShown] = useState(false);

const openImgEditor = () => {
  setIsImgEditorShown(true);
};

const closeImgEditor = () => {
  setIsImgEditorShown(false);
};

useEffect(() => {

  console.log(imgUrl)
  
},[imgUrl])

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
      <Header
      handleUrl = {() => setPromptDisplay('40%') }

      handleOpenImageEditor = {() => {
        imgUrl !== '' ? setIsImgEditorShown(true) : setPromptDisplay('40%')
        screenSize < 768 ? alert('We are still working on an mobile version :)') : console.log()
      }}
      />
      <ContentFirst />
      <ContentSecond
      handleOpenImageEditor = {() => {
        imgUrl !== '' ? setIsImgEditorShown(true) : setPromptDisplay('40%')
        screenSize < 768 ? alert('We are still working on an mobile version :)') : console.log()
      }}
      />
      <ContentThird />
      <ContentFourth />

      {screenSize >= 768 ? <FooterPC /> : <FooterMobile />}

      {screenSize >= 768 &&
      <ImageEditor

        display = {isImgEditorShown ? 'block' : 'none'}
        ImageEditorContent = 
          {isImgEditorShown && (
            <FilerobotImageEditor
            source={imgUrl}
            onSave={(editedImageObject, designState) => console.log('saved', editedImageObject, designState)}
            onClose={closeImgEditor}
            savingPixelRatio={0} previewPixelRatio={0} />
          )}

      />
          }
          <Prompt
          promptTop = {promptDisplay}
          handlePrompt = {(e: any) => {setInputValue(e.target.value)}}
          handleButtonClose = {() => {setPromptDisplay('-100%')}}
          handleButtonAccept = {() => {
            setImgUrl(inputValue)
            setPromptDisplay('-100%')
          }}
          />
    </div>
  )
}