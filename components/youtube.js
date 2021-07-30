'use strict'
// Initial Template Code
const youtube = document.createElement('template')
youtube.template = {}


// 888    888 88888888888 888b     d888 888      
// 888    888     888     8888b   d8888 888      
// 888    888     888     88888b.d88888 888      
// 8888888888     888     888Y88888P888 888      
// 888    888     888     888 Y888P 888 888      
// 888    888     888     888  Y8P  888 888      
// 888    888     888     888   "   888 888      
// 888    888     888     888       888 88888888                            


youtube.template.html = ({}) => `
  <a href="https://www.youtube.com/channel/UCYJFMSYRjnR8-lXvsKAfsDw" target="_blank" class="yt" colspan="1">
    <svg viewBox="0 267.07 1800 1260.02" width="42.667142857142856" height="30" xmlns="http://www.w3.org/2000/svg">
      <path d="M711 1128l484-250-484-253v503zm185-862c377 0 627 18 627 18 35 4 112 4 180 76 0 0 55 54 71 178 19 145 18 290 18 290v136s1 145-18 290c-16 123-71 178-71 178-68 71-145 71-180 75 0 0-250 19-627 19-466-4-609-18-609-18-40-7-130-5-198-76 0 0-55-55-71-178C-1 1109 0 964 0 964V828s-1-145 18-290c16-124 71-178 71-178 68-72 145-72 180-76 0 0 250-18 627-18z"/>
    </svg>
  </a>
`


// .d8888b.   .d8888b.   .d8888b.  
// d88P  Y88b d88P  Y88b d88P  Y88b 
// 888    888 Y88b.      Y88b.      
// 888         "Y888b.    "Y888b.   
// 888            "Y88b.     "Y88b. 
// 888    888       "888       "888 
// Y88b  d88P Y88b  d88P Y88b  d88P 
//  "Y8888P"   "Y8888P"   "Y8888P"  


youtube.template.css = ({

}) => `
  <style>

    .yt { fill: red; }
    .yt, .lp { position: relative; }
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


youtube.innerHTML = youtube.template.css({}) + youtube.template.html({})
customElements.define('youtube-',
  class extends HTMLElement {
    constructor() {
      super()
      
      this
        .attachShadow({mode: 'open'})
        .appendChild(youtube.content.cloneNode(true))





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
	<youtube-></youtube->
*/ 