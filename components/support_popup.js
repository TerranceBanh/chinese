'use strict'
// Initial Template Code
const supportPopup = document.createElement('template')
supportPopup.template = {}


// 888    888 88888888888 888b     d888 888      
// 888    888     888     8888b   d8888 888      
// 888    888     888     88888b.d88888 888      
// 8888888888     888     888Y88888P888 888      
// 888    888     888     888 Y888P 888 888      
// 888    888     888     888  Y8P  888 888      
// 888    888     888     888   "   888 888      
// 888    888     888     888       888 88888888                            


supportPopup.template.html = ({}) => `
  <div class="background">
    <div class="settings-menu-container">
      <close2-></close2->
      <div class="title">Show Your<br>Support! 👀👍🏻</div>
      <img class="img" src="./img/default_react.png">
      <div class="social">
        <librapay-></librapay->
        <youtube-></youtube->
        <bili-bili></bili-bili>
      </div>
    </div>
  </div>
`


// .d8888b.   .d8888b.   .d8888b.  
// d88P  Y88b d88P  Y88b d88P  Y88b 
// 888    888 Y88b.      Y88b.      
// 888         "Y888b.    "Y888b.   
// 888            "Y88b.     "Y88b. 
// 888    888       "888       "888 
// Y88b  d88P Y88b  d88P Y88b  d88P 
//  "Y8888P"   "Y8888P"   "Y8888P"  


supportPopup.template.css = ({
    all = {
    position1: (p) => `
      position: ${p};
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `,
  },
  settingsMenuContainer = {
    background: { color: '#0009' }
  },
  settingsMenu = {
    background: { color: 'white' },
    boxModel: {
      padding: { all: '3rem' },
    },
  }
}) => `
  <style>
    ${boilerplate}

    .background {
      ${all.position1('absolute')}
      ${boxModel.content({ width: '100vw', height: '100vh' })}
      ${background(settingsMenuContainer.background)}
      z-index: 1;
    }
    .settings-menu-container {
      ${flex({ direction: 'column', align: 'center', gap: { all: '2rem' } })}
      ${background(settingsMenu.background)}
      ${boxModel.content({ width: 'max-content' })}
      ${boxModel.padding(settingsMenu.boxModel.padding)}
      ${all.position1('relative')}
    }
    .title {
      font-size: 3rem;
    }
    .img {
      width: 20rem;
      height: 20rem;
    }
    .social {
      ${flex({ align: 'space-around', justify: 'space-around', gap: { all: '1rem' } })}
    }
    close2- {
      position: absolute;
      top: 0;
      right: 0;
      cursor: pointer;
    }
  </style>
`



// 8888888888 888      8888888888 888b     d888 8888888888 888b    888 88888888888 
// 888        888      888        8888b   d8888 888        8888b   888     888     
// 888        888      888        88888b.d88888 888        88888b  888     888     
// 8888888    888      8888888    888Y88888P888 8888888    888Y88b 888     888     
// 888        888      888        888 Y888P 888 888        888 Y88b888     888     
// 888        888      888        888  Y8P  888 888        888  Y88888     888     
// 888        888      888        888   "   888 888        888   Y8888     888     
// 8888888888 88888888 8888888888 888       888 8888888888 888    Y888     888     


supportPopup.innerHTML = supportPopup.template.css({}) + supportPopup.template.html({})
customElements.define('support-popup',
  class extends HTMLElement {
    constructor() {
      super()
      
      this
        .attachShadow({mode: 'open'})
        .appendChild(supportPopup.content.cloneNode(true))

      const background = $(this)('.background')
      const title = $(this)('.title')
      const img = $(this)('.img')
      const close = $(this)('close2-')
      const librapay = $(this)('librapay-')
      const youtube = $(this)('youtube-')
      const bilibili = $(this)('bili-bili')

      const expireTime = '7days'
      if (!storeGet('promo.expiry')) storeSet('promo.expiry', expDate(expireTime))
      else {
        const currentTime = new Date().getTime()
        const expiry = new Date(storeGet('promo.expiry')).getTime()
        if (currentTime >= expiry) {
          storeSet('promo.value', 0)
          storeSet('promo.expiry', expDate(expireTime))
        }
      }
      if (!!storeGet('promo.value')) background.style.visibility = 'hidden'

      ;[
        { element: close, msg: 'No Hard <br> Feelings 👌🏻👀', img1: './img/exit_react1.png', img2: './img/exit_react2.png', },
        { element: librapay, msg: 'Best Kind Of<br>Support! 👀👍🏻', img1: './img/librapay_react1.png', img2: './img/librapay_react2.png', href: 'https://liberapay.com/TerranceBanh/donate', },
        { element: youtube, msg: 'Learn to Code<br>With Me! 👀👍🏻', img1: './img/youtube_react1.png', img2: './img/youtube_react2.png', href: 'https://www.youtube.com/channel/UCYJFMSYRjnR8-lXvsKAfsDw', },
        { element: bilibili, msg: 'Watch My Stupid<br>Videos! 👀👍🏻', img1: './img/bilibili_react1.png', img2: './img/bilibili_react2.png', href: 'https://space.bilibili.com/1264996871', },
      ].forEach(({ element, msg, img1, img2, href }, b1) => {
        element.addEventListener('mouseover', () => {
          img.src = img1
          title.innerHTML = msg
        })
        element.addEventListener('mouseout', () => {
          img.src = './img/default_react.png'
          title.innerHTML = 'Show Your<br>Support! 👀👍🏻'
        })
        element.addEventListener('click', (e) => {
          e.preventDefault()
          img.src = img2
          setTimeout(() => {
            if (b1 !== 0) window.open(href)
            background.style.visibility = 'hidden'
          }, 500)
          storeSet('promo.value', 1)
          storeSet('promo.expiry', expDate(expireTime))
        })
      })

    }
    
  }
)



// 88888888888 8888888888 888b     d888 8888888b.  888             d8888 88888888888 8888888888 
//     888     888        8888b   d8888 888   Y88b 888            d88888     888     888        
//     888     888        88888b.d88888 888    888 888           d88P888     888     888        
//     888     8888888    888Y88888P888 888   d88P 888          d88P 888     888     8888888    
//     888     888        888 Y888P 888 8888888P"  888         d88P  888     888     888        
//     888     888        888  Y8P  888 888        888        d88P   888     888     888        
//     888     888        888   "   888 888        888       d8888888888     888     888        
//     888     8888888888 888       888 888        88888888 d88P     888     888     8888888888 


/*  HTML TEMPLATE
	<support-popup></support-popup>
*/ 
