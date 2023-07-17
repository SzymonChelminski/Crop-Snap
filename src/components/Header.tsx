import React, { useState } from 'react'

// Images
import logo from '../images/logo.png'
import crop from '../images/crop.jpg'
import draw from '../images/draw.jpg'
import offset from '../images/offset.jpg'
import remove from '../images/remove.jpg'


export default function Header(props: any) {

//Animations:

//bars - mobile

const [mobileBarsState, setMobileBarsState] = useState(false)

function barsFunction(){
  const barsEl = Array.from(document.getElementsByClassName('bars__animation') as HTMLCollectionOf<HTMLElement>)

  for(let i=0; i<barsEl.length ;i++){
    let barsIndex = [6,7,8,9]
    let barsQue = [0,250,500,750]

    barsEl[i].style.zIndex = `${barsIndex[i]}`
    barsEl[i].style.animationDelay = `${barsQue[i]}ms`
  }

barsEl.forEach(item =>{
    item.classList.add('bars__animate')
  })

setTimeout(()=>{
  barsEl.forEach(item =>{
    item.style.zIndex = '-1'
    item.classList.remove('bars__animate')
  })
},1250)

  const rollbarHeight = document.querySelector<HTMLDivElement>('.bars__rollbar')!

  !mobileBarsState ? rollbarHeight.style.height = '150px' : rollbarHeight.style.height = '0px'

  setTimeout(()=>{
    setMobileBarsState(prevState => !prevState)
  },0)
}

function closeMobileBars(){
  document.querySelector<HTMLDivElement>('.bars__rollbar')!.style.height = '0px'

  setTimeout(()=>{
    setMobileBarsState(prevState => !prevState)
  },0)
}

//start new project - arrow

function arrowFunctionAdd(){
  const arrow = document.getElementById('quick__start__arrow')

  if(window.innerWidth <= 1023){
    arrow!.style.marginRight = '215px'
  }
  else if(window.innerWidth <= 1439){
    arrow!.style.marginRight = '285px'
  }
  else if(window.innerWidth >= 1440){
    arrow!.style.marginRight = '355px'
  }

}

function arrowFunctionRemove(){
  const arrow = document.getElementById('quick__start__arrow')

  if(window.innerWidth <= 1023){
    arrow!.style.marginRight = '325px'
  }
  else if(window.innerWidth <= 1439){
    arrow!.style.marginRight = '375px'
  }
  else if(window.innerWidth >= 1440){
    arrow!.style.marginRight = '440px'
  }

}

// Edit project - pencil 

function pencilFunctionAdd(){
  const pencil = document.querySelector<HTMLElement>('.pencil') 

    pencil!.animate(
      [
        {
          marginBottom: '0px'
        },
        {
          marginBottom: '125px'
        },
        {
          marginBottom: '-125px',
          zIndex: '-1',
        },
        {
          marginBottom: '0px',
          zIndex: '1'
        }
      ],
      {
        duration: 400,
        iterations: 1
      }
    )

}

// Logo - dash-array animation

function logoAnimation(){
  const logoName = [...document.querySelectorAll<SVGPathElement>('path')];

  logoName.forEach(item => {

    item.style.strokeDasharray = `${item.getTotalLength()}px`
    item.style.strokeDashoffset = `${item.getTotalLength()}px`
    item.style.fill = `transparent`

    item.animate(
      [
        {
          strokeDasharray: '0px',
          strokeDashoffset: '0px',
          fill: 'white'
        }
      ],
      {
        duration: 2000,
        iterations: 1,
        fill: 'forwards'
      }
    )
  })

}

  return (
    <div className='header' onLoad={logoAnimation}>
        <nav className='navbar'>
          <div className='navbar__elements navbar__brand'>
            <img src={logo} alt="logo" className='navbar__logo'/>
            <span className='navbar__name'>
                <svg width="174" height="36" viewBox="0 0 174 36" fill="none" xmlns="http://www.w3.org/2000/svg" id='navbar__name__svg'>
                  <path d="M21.2449 9.5641H18.3394C18.1676 8.64957 17.8669 7.84615 17.4373 7.15385C17.0155 6.46154 16.5 5.88034 15.8908 5.41026C15.2894 4.93162 14.6216 4.57265 13.8874 4.33333C13.1532 4.09402 12.3878 3.97436 11.5911 3.97436C10.1383 3.97436 8.82227 4.37607 7.64287 5.17949C6.47129 5.98291 5.53793 7.16667 4.84279 8.73077C4.15546 10.2949 3.8118 12.2137 3.8118 14.4872C3.8118 16.7607 4.15546 18.6795 4.84279 20.2436C5.53793 21.8077 6.47129 22.9915 7.64287 23.7949C8.82227 24.5983 10.1383 25 11.5911 25C12.3878 25 13.1532 24.8803 13.8874 24.641C14.6216 24.4017 15.2894 24.047 15.8908 23.5769C16.5 23.0983 17.0155 22.5128 17.4373 21.8205C17.8669 21.1197 18.1676 20.3162 18.3394 19.4103H21.2449C21.0262 20.7521 20.6279 21.953 20.0499 23.0128C19.472 24.0726 18.7534 24.9744 17.8942 25.718C17.0351 26.453 16.0705 27.0128 15.0004 27.3974C13.9382 27.7821 12.8017 27.9744 11.5911 27.9744C9.54474 27.9744 7.72488 27.4274 6.13153 26.3333C4.53818 25.2393 3.28459 23.6838 2.37075 21.6667C1.45692 19.6496 1 17.2564 1 14.4872C1 11.7179 1.45692 9.32479 2.37075 7.30769C3.28459 5.2906 4.53818 3.73504 6.13153 2.64103C7.72488 1.54701 9.54474 1 11.5911 1C12.8017 1 13.9382 1.19231 15.0004 1.57692C16.0705 1.96154 17.0351 2.52564 17.8942 3.26923C18.7534 4.00427 19.472 4.90171 20.0499 5.96154C20.6279 7.01282 21.0262 8.21367 21.2449 9.5641Z" stroke="white"/>
                  <path d="M25.5652 27.6154V7.92308H28.2364V10.8974H28.4238C28.7519 9.92308 29.3455 9.13248 30.2046 8.52564C31.0638 7.9188 32.0323 7.61538 33.1101 7.61538C33.3132 7.61538 33.5671 7.61966 33.8717 7.62821C34.1763 7.63675 34.4067 7.64957 34.5629 7.66667V10.7436C34.4692 10.7179 34.2544 10.6795 33.9185 10.6282C33.5905 10.5684 33.2429 10.5385 32.8758 10.5385C32.001 10.5385 31.22 10.7393 30.5327 11.141C29.8531 11.5342 29.3142 12.0812 28.9159 12.7821C28.5254 13.4744 28.3301 14.265 28.3301 15.1538V27.6154H25.5652Z" stroke="white"/>
                  <path d="M44.6034 28.0256C42.9788 28.0256 41.5533 27.6026 40.3271 26.7564C39.1086 25.9103 38.1558 24.7265 37.4684 23.2051C36.7889 21.6838 36.4492 19.906 36.4492 17.8718C36.4492 15.8205 36.7889 14.0299 37.4684 12.5C38.1558 10.9701 39.1086 9.78205 40.3271 8.9359C41.5533 8.08974 42.9788 7.66667 44.6034 7.66667C46.228 7.66667 47.6495 8.08974 48.8679 8.9359C50.0942 9.78205 51.0471 10.9701 51.7266 12.5C52.4139 14.0299 52.7576 15.8205 52.7576 17.8718C52.7576 19.906 52.4139 21.6838 51.7266 23.2051C51.0471 24.7265 50.0942 25.9103 48.8679 26.7564C47.6495 27.6026 46.228 28.0256 44.6034 28.0256ZM44.6034 25.3077C45.8374 25.3077 46.8528 24.9615 47.6495 24.2692C48.4462 23.5769 49.0359 22.6667 49.4186 21.5385C49.8013 20.4103 49.9926 19.188 49.9926 17.8718C49.9926 16.5556 49.8013 15.3291 49.4186 14.1923C49.0359 13.0556 48.4462 12.1368 47.6495 11.4359C46.8528 10.735 45.8374 10.3846 44.6034 10.3846C43.3693 10.3846 42.3539 10.735 41.5572 11.4359C40.7606 12.1368 40.1709 13.0556 39.7882 14.1923C39.4054 15.3291 39.2141 16.5556 39.2141 17.8718C39.2141 19.188 39.4054 20.4103 39.7882 21.5385C40.1709 22.6667 40.7606 23.5769 41.5572 24.2692C42.3539 24.9615 43.3693 25.3077 44.6034 25.3077Z" stroke="white"/>
                  <path d="M56.9782 35V7.92308H59.6494V11.0513H59.9775C60.1805 10.7094 60.4617 10.2735 60.821 9.74359C61.1881 9.20513 61.7114 8.7265 62.3909 8.30769C63.0782 7.88034 64.0077 7.66667 65.1793 7.66667C66.6945 7.66667 68.0301 8.0812 69.1861 8.91026C70.3421 9.73932 71.2442 10.9145 71.8924 12.4359C72.5407 13.9573 72.8649 15.7521 72.8649 17.8205C72.8649 19.906 72.5407 21.7137 71.8924 23.2436C71.2442 24.765 70.346 25.9444 69.1978 26.7821C68.0497 27.6111 66.7258 28.0256 65.2261 28.0256C64.0702 28.0256 63.1446 27.8162 62.4495 27.3974C61.7544 26.9701 61.2193 26.4872 60.8444 25.9487C60.4695 25.4017 60.1805 24.9487 59.9775 24.5897H59.7431V35H56.9782ZM59.6963 17.7692C59.6963 19.2564 59.8954 20.5684 60.2938 21.7051C60.6921 22.8333 61.274 23.7179 62.0394 24.359C62.8049 24.9915 63.7421 25.3077 64.8512 25.3077C66.0072 25.3077 66.9718 24.9744 67.7451 24.3077C68.5261 23.6325 69.1119 22.7265 69.5024 21.5897C69.9008 20.4444 70.0999 19.1709 70.0999 17.7692C70.0999 16.3846 69.9047 15.1368 69.5141 14.0256C69.1314 12.906 68.5495 12.0214 67.7685 11.3718C66.9952 10.7137 66.0228 10.3846 64.8512 10.3846C63.7265 10.3846 62.7814 10.6966 62.016 11.3205C61.2506 11.9359 60.6726 12.7991 60.2821 13.9103C59.8915 15.0128 59.6963 16.2991 59.6963 17.7692Z" stroke="white"/>
                  <path d="M83.8777 27.9744C82.3 27.9744 80.941 27.6581 79.8006 27.0256C78.6603 26.3932 77.7816 25.5256 77.1646 24.4231C76.5475 23.3205 76.239 22.0598 76.239 20.641C76.239 19.547 76.4499 18.5769 76.8717 17.7308C77.3013 16.8761 77.8909 16.0855 78.6408 15.359C79.3984 14.6239 80.2693 13.8889 81.2534 13.1538L84.7213 10.3333C85.4008 9.84615 85.9436 9.32479 86.3498 8.76923C86.7637 8.21368 86.9707 7.48718 86.9707 6.58974C86.9707 5.92308 86.7013 5.27778 86.1623 4.65385C85.6312 4.02991 84.9322 3.71795 84.0652 3.71795C83.456 3.71795 82.917 3.88889 82.4484 4.23077C81.9876 4.5641 81.6244 4.99145 81.3588 5.51282C81.1011 6.02564 80.9722 6.55556 80.9722 7.10256C80.9722 7.71795 81.1245 8.34188 81.4291 8.97436C81.7416 9.59829 82.136 10.2393 82.6124 10.8974C83.0967 11.547 83.5966 12.2137 84.1121 12.8974L95.1249 27.6154H91.7976L82.7062 15.6154C81.8626 14.5043 81.0972 13.4957 80.4099 12.5897C79.7225 11.6838 79.1758 10.7906 78.7696 9.91026C78.3635 9.02991 78.1604 8.07692 78.1604 7.05128C78.1604 5.87179 78.3986 4.83761 78.8751 3.94872C79.3593 3.05128 80.0349 2.3547 80.9019 1.85897C81.7767 1.3547 82.7999 1.10256 83.9715 1.10256C85.1743 1.10256 86.2092 1.35898 87.0762 1.8718C87.9431 2.37607 88.6109 3.04701 89.0796 3.88461C89.5482 4.71368 89.7825 5.61539 89.7825 6.58974C89.7825 7.84615 89.4974 8.9359 88.9273 9.85897C88.3571 10.7821 87.5799 11.641 86.5958 12.4359L81.8157 16.3333C80.7379 17.2051 80.0076 18.0513 79.6249 18.8718C79.2422 19.6923 79.0508 20.2821 79.0508 20.641C79.0508 21.4615 79.2461 22.2265 79.6366 22.9359C80.0271 23.6453 80.5778 24.2179 81.2885 24.6538C81.9993 25.0897 82.8311 25.3077 83.784 25.3077C84.69 25.3077 85.5726 25.0983 86.4318 24.6795C87.2909 24.2521 88.0681 23.6368 88.7632 22.8333C89.4662 22.0299 90.0207 21.0641 90.4269 19.9359C90.8408 18.8077 91.0478 17.5385 91.0478 16.1282H93.719C93.719 17.8718 93.5355 19.2949 93.1684 20.3974C92.8013 21.5 92.3873 22.3632 91.9265 22.9872C91.4657 23.6111 91.0947 24.0769 90.8135 24.3846C90.7198 24.5128 90.6339 24.641 90.5558 24.7692C90.4777 24.8974 90.3917 25.0256 90.298 25.1538C89.5248 26.1026 88.5484 26.812 87.3691 27.2821C86.1897 27.7436 85.0259 27.9744 83.8777 27.9744Z" stroke="white"/>
                  <path d="M111.682 7.92308C111.542 6.62393 110.972 5.61539 109.972 4.89744C108.972 4.17949 107.746 3.82051 106.293 3.82051C105.231 3.82051 104.301 4.00855 103.505 4.38462C102.716 4.76068 102.099 5.27778 101.654 5.9359C101.216 6.59402 100.997 7.34188 100.997 8.17949C100.997 8.88034 101.15 9.48291 101.454 9.98718C101.767 10.4829 102.165 10.8974 102.649 11.2308C103.134 11.5556 103.641 11.8248 104.172 12.0385C104.704 12.2436 105.192 12.4103 105.637 12.5385L108.074 13.2564C108.699 13.4359 109.394 13.6838 110.159 14C110.933 14.3162 111.671 14.7479 112.374 15.2949C113.084 15.8333 113.67 16.5256 114.131 17.3718C114.592 18.2179 114.822 19.2564 114.822 20.4872C114.822 21.906 114.482 23.188 113.803 24.3333C113.131 25.4786 112.147 26.3889 110.85 27.0641C109.562 27.7393 107.996 28.0769 106.152 28.0769C104.434 28.0769 102.946 27.7735 101.689 27.1667C100.439 26.5598 99.4549 25.7137 98.7363 24.6282C98.0256 23.5427 97.6233 22.2821 97.5296 20.8462H100.529C100.607 21.8376 100.912 22.6581 101.443 23.3077C101.982 23.9487 102.661 24.4274 103.481 24.7436C104.309 25.0513 105.2 25.2051 106.152 25.2051C107.262 25.2051 108.257 25.0085 109.14 24.6154C110.023 24.2137 110.722 23.6581 111.237 22.9487C111.753 22.2308 112.01 21.3932 112.01 20.4359C112.01 19.5641 111.788 18.8547 111.343 18.3077C110.897 17.7607 110.312 17.3162 109.585 16.9744C108.859 16.6325 108.074 16.3333 107.23 16.0769L104.278 15.1538C102.403 14.5641 100.919 13.7222 99.8259 12.6282C98.7324 11.5342 98.1857 10.1026 98.1857 8.33333C98.1857 6.86325 98.5489 5.5812 99.2753 4.48718C100.009 3.38462 100.994 2.52991 102.228 1.92308C103.47 1.30769 104.856 1 106.387 1C107.933 1 109.308 1.30342 110.511 1.91026C111.714 2.50855 112.666 3.32906 113.369 4.37179C114.08 5.41453 114.455 6.59829 114.494 7.92308H111.682Z" stroke="white"/>
                  <path d="M121.989 15.7692V27.6154H119.224V7.92308H121.896V11H122.13C122.552 10 123.192 9.19658 124.051 8.58974C124.91 7.97436 126.02 7.66667 127.379 7.66667C128.597 7.66667 129.663 7.94017 130.577 8.48718C131.491 9.02564 132.202 9.84616 132.709 10.9487C133.217 12.0427 133.471 13.4274 133.471 15.1026V27.6154H130.706V15.3077C130.706 13.7607 130.339 12.5556 129.605 11.6923C128.87 10.8205 127.863 10.3846 126.582 10.3846C125.699 10.3846 124.91 10.594 124.215 11.0128C123.528 11.4316 122.985 12.0427 122.587 12.8462C122.188 13.6496 121.989 14.6239 121.989 15.7692Z" stroke="white"/>
                  <path d="M143.819 28.0769C142.678 28.0769 141.644 27.8419 140.714 27.3718C139.785 26.8932 139.047 26.2051 138.5 25.3077C137.953 24.4017 137.68 23.3077 137.68 22.0256C137.68 20.8974 137.883 19.9829 138.289 19.2821C138.695 18.5726 139.238 18.0171 139.917 17.6154C140.597 17.2137 141.347 16.9145 142.167 16.7179C142.995 16.5128 143.827 16.3504 144.662 16.2308C145.756 16.0769 146.642 15.9615 147.322 15.8846C148.009 15.7991 148.509 15.6581 148.821 15.4615C149.142 15.265 149.302 14.9231 149.302 14.4359V14.3333C149.302 13.0684 148.985 12.0855 148.353 11.3846C147.728 10.6838 146.779 10.3333 145.506 10.3333C144.186 10.3333 143.151 10.6496 142.401 11.2821C141.651 11.9145 141.124 12.5897 140.82 13.3077L138.195 12.2821C138.664 11.0855 139.289 10.1538 140.07 9.48718C140.859 8.81197 141.718 8.34188 142.647 8.07692C143.584 7.80342 144.506 7.66667 145.412 7.66667C145.99 7.66667 146.654 7.74359 147.404 7.89744C148.161 8.04273 148.892 8.34615 149.595 8.80769C150.305 9.26923 150.895 9.96581 151.364 10.8974C151.832 11.8291 152.067 13.0769 152.067 14.641V27.6154H149.302V24.9487H149.161C148.974 25.3761 148.661 25.8333 148.224 26.3205C147.787 26.8077 147.205 27.2222 146.478 27.5641C145.752 27.906 144.865 28.0769 143.819 28.0769ZM144.241 25.359C145.334 25.359 146.256 25.1239 147.006 24.6538C147.763 24.1838 148.333 23.5769 148.716 22.8333C149.107 22.0897 149.302 21.3077 149.302 20.4872V17.718C149.185 17.8718 148.927 18.0128 148.529 18.141C148.138 18.2607 147.685 18.3675 147.17 18.4615C146.662 18.547 146.166 18.6239 145.682 18.6923C145.205 18.7521 144.819 18.8034 144.522 18.8462C143.803 18.9487 143.131 19.1154 142.507 19.3462C141.89 19.5684 141.39 19.906 141.007 20.359C140.632 20.8034 140.445 21.4103 140.445 22.1795C140.445 23.2308 140.8 24.0256 141.511 24.5641C142.229 25.094 143.139 25.359 144.241 25.359Z" stroke="white"/>
                  <path d="M157.113 35V7.92308H159.785V11.0513H160.113C160.316 10.7094 160.597 10.2735 160.956 9.74359C161.323 9.20513 161.847 8.7265 162.526 8.30769C163.213 7.88034 164.143 7.66667 165.314 7.66667C166.83 7.66667 168.165 8.0812 169.321 8.91026C170.477 9.73932 171.379 10.9145 172.028 12.4359C172.676 13.9573 173 15.7521 173 17.8205C173 19.906 172.676 21.7137 172.028 23.2436C171.379 24.765 170.481 25.9444 169.333 26.7821C168.185 27.6111 166.861 28.0256 165.361 28.0256C164.205 28.0256 163.28 27.8162 162.585 27.3974C161.89 26.9701 161.354 26.4872 160.98 25.9487C160.605 25.4017 160.316 24.9487 160.113 24.5897H159.878V35H157.113ZM159.831 17.7692C159.831 19.2564 160.031 20.5684 160.429 21.7051C160.827 22.8333 161.409 23.7179 162.175 24.359C162.94 24.9915 163.877 25.3077 164.986 25.3077C166.142 25.3077 167.107 24.9744 167.88 24.3077C168.661 23.6325 169.247 22.7265 169.638 21.5897C170.036 20.4444 170.235 19.1709 170.235 17.7692C170.235 16.3846 170.04 15.1368 169.649 14.0256C169.267 12.906 168.685 12.0214 167.904 11.3718C167.13 10.7137 166.158 10.3846 164.986 10.3846C163.862 10.3846 162.917 10.6966 162.151 11.3205C161.386 11.9359 160.808 12.7991 160.417 13.9103C160.027 15.0128 159.831 16.2991 159.831 17.7692Z" stroke="white"/>
              </svg>
            </span>
          </div>
          <div className='navbar__elements navbar__settings'>
            <div className="navbar__bars" onClick={barsFunction}>
                <i className="fa-solid fa-bars"></i>
                <div className="bars__animation__1 bars__animation"></div>
                <div className="bars__animation__2 bars__animation"></div>
                <div className="bars__animation__3 bars__animation"></div>
                <div className="bars__animation__4 bars__animation"></div>
              </div>
              <div className="bars__rollbar" onClick={closeMobileBars}>   {/* <---- mobile_nav */}
                <i className="fa-solid fa-user-check" onClick={props.handleLogin}></i>
                <i className="fa-solid fa-user-plus" onClick={props.handleSignIn}></i>
                <i className="fa-solid fa-user-xmark"></i>
                </div>   
              <span className='navbar__logs navbar__login' onClick={props.handleLogin}>
                <i className="fa-solid fa-user"/>
                login
              </span>
              <span className='navbar__logs navbar__register'>
                  <span onClick={props.handleSignIn}>
                    register
                  </span>
                  <div className='navbar__register__color1'></div>
                  <div className='navbar__register__color2'></div>
                  <div className='navbar__register__color3'></div>
                  <div className='navbar__register__color4'></div>
              </span>
          </div>
        </nav>
        <div className='content__container'>
          <section className='text'>
            <h1 className='text__header'>
              Looking to improve quality of your images without much effort?
            </h1>
            <p className='text__description'>
              Welcome to Crop&Snap, a place where perfection meets with ease. Are you just searching for a quick photo-editing site? Your friends recommended it, or mayby u stumbled upon this page randomly?
              No worries, with Crop&Snap you can explore the world of photography from different view, we up here like to do things our way, make sad photos come alive or do some minor enhancements! 
            </p>
          </section>
          <div className='quick__acces__container'>
            <div className='quick__start' onPointerEnter={arrowFunctionAdd} onMouseLeave={arrowFunctionRemove} onClick={props.handleOpenImageEditor}>
              <section className='quick__description arrows__container'>
                <i className="fa-solid fa-play" id='quick__start__arrow' />
                <i className="fa-solid fa-play" />
                <span>
                  Start your jurney with Crop&Snap by developing new project
                </span>
              </section>
              <section className='quick__title title__start'>
                <span>
                  Start a new project
                </span>
              </section>
            </div>
            <div className='quick__edit' onPointerEnter={pencilFunctionAdd} onClick={props.handleOpenImageEditor}>
              <section className='quick__description'>
                <i className="fa-solid fa-pen pencil" />
                <span>
                  Make existing project better with our newest advanced tools
                </span>
              </section>
              <section className='quick__title title__edit'>
                <span>
                  Edit existing project
                </span>
              </section>
            </div>
            <div className='quick__tools' onClick={props.handleOpenImageEditor}>
              <span>
                Try out new Crop&Snap tools!
              </span>
            </div>
          </div>
          <div className='templates__container'>
            <div className='templates__square' onClick={props.handleOpenImageEditor}>
              <div className='templates__square__img'>
                <img src={crop} alt="" className='square__img'/>
              </div>
              <div className='templates__sqaure__title'>
                <span>
                  crop
                </span>
              </div>
            </div>
            <div className='templates__square' onClick={props.handleOpenImageEditor}>
              <div className='templates__square__img'>
                <img src={draw} alt="" className='square__img'/>
              </div>
              <div className='templates__sqaure__title'>
                <span>
                  draw
                </span>
              </div>
            </div>
            <div className='templates__square' onClick={props.handleOpenImageEditor}>
              <div className='templates__square__img'>
                <img src={offset} alt="" className='square__img'/>
              </div>
              <div className='templates__sqaure__title'>
                <span>
                  offset
                </span>
              </div>
            </div>
            <div className='templates__square' onClick={props.handleOpenImageEditor}>
              <div className='templates__square__img'>
                <img src={remove} alt="" className='square__img'/>
              </div>
              <div className='templates__sqaure__title'>
                <span>
                  remove
                </span>
              </div>
            </div>
            <div className='templates__square drag__drop' onClick={props.handleUrl}>
              <span className='drag__drop__content'>
                add
              <i className="fa-solid fa-paperclip"></i>
                img
              </span>
            </div>
          </div>
        </div>
    </div>
  )
}