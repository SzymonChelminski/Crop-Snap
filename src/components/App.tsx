import React, { useEffect, useState} from 'react'
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js'
import UserPool from '../UserPool'

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
} from 'react-filerobot-image-editor';

// Cognito 
import Cognito from './Cognito'
import Message from './Message'

export default function App() {

// Cognito

const pages = {
  page1: '0px',
  page2: '275px',
  page3: '550px',
}

const [carouselPage, setCarouselPage] = useState(pages.page1)

useEffect(() =>{

  const carousel = document.querySelector<HTMLDivElement>('.cognito__carousel__container')
  carousel!.style.right = carouselPage

})

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [errorSignIn, setErrorSignIn] = useState('')

const onSubmitSignIn = (e: any) => {
    
    UserPool.signUp(email, password, [], [], (err) => {
        if (err)
        {
          const error = err.toString()
          setErrorSignIn(error)
        }
        else
        {
          setCarouselPage(pages.page2)
          setErrorSignIn('')
        }
    })

    e.preventDefault();
}

const [login, setLogin] = useState('')
const [passwordLogin, setPasswordLogin] = useState('')
const [errorLogin, setErrorLogin] = useState('dziala')

const [isLogged, setIslogged] = useState(false)

const onSubmitLogin =(e: any) => {

    const user = new CognitoUser({
        Username: login,
        Pool: UserPool
    })

    const authDetails = new AuthenticationDetails({
        Username: login,
        Password: passwordLogin,
    })

    user.authenticateUser(authDetails, {
        onSuccess: (data) => {
            console.log('onSucces: ', data)
            setCognitoDisplayState('-100%')
            setErrorLogin('')
            setIslogged(true)
        },
        onFailure: (err) => {
            const error = err.toString()
            setErrorLogin(error)
        },
        newPasswordRequired: (data) => {
            console.log('newPasswordRequired: ', data)
        }
    })

    e.preventDefault();
}

const [verifyCode, setVerifyCode] = useState('')
const [errorCode, setErrorCode] = useState('dziala')

const userData = {
  Username: email,
  Pool: UserPool
}

function onSubmitVerify(e: any){

    const cognitoUser = new CognitoUser(userData);
    cognitoUser.confirmRegistration(verifyCode, true, (err: any, result: any) => {
        if(err)
        {   
            const error = err.toString()
            setErrorCode(error)
        }
        else
        {
            console.log(result)
            setCarouselPage(pages.page3)
            setErrorCode('')
        }
    })

    e.preventDefault();
}

function onSubmiSignOut(e: any){

  const cognitoUser = new CognitoUser(userData);
  cognitoUser.signOut()

  setIslogged(false)

  e.preventDefault();
}

const [cognitoDisplayState, setCognitoDisplayState] = useState('-100%')


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

const [messageLogOut, setMessageLogOut] = useState('')
const [messageDisplayState, setMessageDisplayState] = useState('-100%')

  return (
    <div className='app'>
      <Header
      handleLogin = {() => {
        if(isLogged)
        {
          setMessageLogOut(`You are already logged as ${login}, to pursue this action please log out first.`)
          setMessageDisplayState('50%')
        }
        else
        {
          setCarouselPage(pages.page3)
          setCognitoDisplayState('50%')
        }
      }}

      checkIfLogged = {isLogged}

      loggedAccount = {login}

      handleSignIn = {() => {
        if(isLogged)
        {
          setMessageLogOut(`You are already logged as ${login}, to pursue this action please log out first.`)
          setMessageDisplayState('50%')
        }
        else
        {
          setCarouselPage(pages.page1)
          setCognitoDisplayState('50%')
        }
      }}

      handleSignOut = {onSubmiSignOut}

      handleUrl = {() => setPromptDisplay('40%') }
openImgEditor
      handleOpenImageEditor = {() => {
        imgUrl !== '' ? openImgEditor() : setPromptDisplay('40%')
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
          <Cognito
          cognitoDisplay={cognitoDisplayState}
          handleCognitoClose ={() => setCognitoDisplayState('-100%')}

          // Sign in 

          HandleonSubmitSignIn = {onSubmitSignIn}
          
          handleOnchangeMailSignIn = {(e: any) => {setEmail(e.target.value)}}
          valueEmailSignIn = {email}

          handleOnchangePasswordSignIn = {(e: any) => {setPassword(e.target.value)}}
          valuePasswordSignIn = {password}

          errorMessageSignIn = {errorSignIn}

          // Verify 

          handleOnSubmitVerify = {onSubmitVerify}

          handleOnChangeVerify = {(e: any) => {setVerifyCode(e.target.value)}}
          valueVerify = {verifyCode}

          errorMessageVerify = {errorCode}

          // Login

          handleOnSubmitLogin = {onSubmitLogin}

          handleOnChangeMailLogin = {(e: any) => {setLogin(e.target.value)}}
          valueMailLogin = {login}

          handleOnChangePasswordLogin = {(e: any) => {setPasswordLogin(e.target.value)}}
          valuePasswordLogin = {passwordLogin}

          errorMessageLogin = {errorLogin}
          />
          <Message 
            message = {messageLogOut}
            messageDisplay = {messageDisplayState}
            closeMessageDisplay = {() => setMessageDisplayState('-100%')}
          />
    </div>
  )
}