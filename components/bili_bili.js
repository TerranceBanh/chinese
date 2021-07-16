'use strict'
// Initial Template Code
const bilibili = document.createElement('template')
bilibili.template = {}


// 888    888 88888888888 888b     d888 888      
// 888    888     888     8888b   d8888 888      
// 888    888     888     88888b.d88888 888      
// 8888888888     888     888Y88888P888 888      
// 888    888     888     888 Y888P 888 888      
// 888    888     888     888  Y8P  888 888      
// 888    888     888     888   "   888 888      
// 888    888     888     888       888 88888888                            


bilibili.template.html = ({}) => `
  <a href="https://space.bilibili.com/1264996871" class="bili-bili">
    <div class="container">
      <div class="box">
        <div class="antennas1"></div>
        <div class="antennas2"></div>
        <div class="eye1"></div>
        <div class="eye2"></div>
        <div class="mouth1"></div>
        <div class="mouth2"></div>
        <div class="feet1"></div>
        <div class="feet2"></div>
      </div>
    </div>
    <div class="text">b<span>i</span><span>l</span><span>i</span> b<span>i</span><span>l</span><span>i</span></div>
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


bilibili.template.css = ({
  
}) => `
  <style>
    .bili-bili {
      display: inline-flex;
      transform:  translateY(25%);
      text-decoration: none;
    }
    .bili-bili > .text {
      display: inline-block;
      color: #00a1d6;
      font-weight: 1000;
      transform: scale(1.2, 2) skew(10deg, 0deg) translate(10%, 15%);
      font-size: 1.5rem;
      height: 1.5rem;
    }
    .bili-bili span:nth-child(1),
    .bili-bili span:nth-child(3),
    .bili-bili span:nth-child(4), 
    .bili-bili span:nth-child(6) {
      display: inline-block;
      transform: scale(1, 0.70)  translateY(4%);
    }
    .bili-bili span:nth-child(2), .text > span:nth-child(5) {
      display: inline-block;
      transform: scale(1, 0.80) translateY(-4%);
    }
    .bili-bili .box {
      position: relative;
      width: 2.5rem;
      height: 2rem;
      border: #00a1d6 solid 0.4rem;
      border-radius: 0.5rem;
    }
    .bili-bili .eye1, .bili-bili .eye2 {
      position: absolute;
      top: 35%;
      background: #00a1d6;
      width: 0.75rem;
      height: 0.3rem;
      transform-origin: center;
    }
    .bili-bili .eye1 {
      left: 10%;
      transform: rotate(-15deg)
    }
    .bili-bili .eye2 {
      right: 10%;
      transform: rotate(15deg)
    }
    .bili-bili .antennas1, .bili-bili .antennas2 {
      position: absolute;
      top: -26%;
      background: #00a1d6;
      width: 1rem;
      height: 0.25rem;
      border-radius: 10rem;
    }
    .bili-bili .antennas1 {
      right: 10%;
      transform-orign: left center;
      transform: rotate(-45deg);
    }
    .bili-bili .antennas2 {
      left: 10%;
      transform-orign: right center;
      transform: rotate(45deg);
    }
    .bili-bili .feet1, .bili-bili .feet2{
      position: absolute;
      background: #00a1d6;
      bottom: -0.6rem;
      width: 0.4rem;
      height: 0.4rem;
      border-radius: 10rem;
    }
    .bili-bili .feet1 {
      left: 12.5%;
    }
    .bili-bili .feet2 {
      right: 12.5%;
    }
    .bili-bili .mouth1 {
      position: absolute;
      top: 65%;
      left: calc(50% - 0.1rem);
      width: 0.2rem;
      height: 0.2rem;
      border: #00a1d6 solid 0.2rem;
      border-top: white solid 0;
      border-top-left-radius: 0rem;
      transform-origin: top left;
    }
    .bili-bili .mouth2 {
      position: absolute;
      top: 65%;
      right: calc(50% - 0.1rem);
      width: 0.2rem;
      height: 0.2rem;
      border: #00a1d6 solid 0.2rem;
      border-top: white solid 0;
      border-top-right-radius: 0rem;
      transform-origin: top right;
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


bilibili.innerHTML = bilibili.template.css({}) + bilibili.template.html({})
customElements.define('bili-bili',
  class extends HTMLElement {
    constructor() {
      super()
      
      this
        .attachShadow({mode: 'open'})
        .appendChild(bilibili.content.cloneNode(true))

 
      

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
	<bili-bili></bili-bili>
*/ 

