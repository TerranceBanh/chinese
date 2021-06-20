'use strict'
// Initial Template Code
const buttonCrud = document.createElement('template')
buttonCrud.template = {}


// 888    888 88888888888 888b     d888 888      
// 888    888     888     8888b   d8888 888      
// 888    888     888     88888b.d88888 888      
// 8888888888     888     888Y88888P888 888      
// 888    888     888     888 Y888P 888 888      
// 888    888     888     888  Y8P  888 888      
// 888    888     888     888   "   888 888      
// 888    888     888     888       888 88888888                            


buttonCrud.template.html = ({}) => `
  <button class="button">
    <div class="question-counter"><sup class="sup"></sup>/<sub class="sub"></sub></div>
    <span class="label"></span>
    <div class="div"></div>
    <div class="icon-container">
      <div class="action">⇨</div>
      <div class="check"></div>
    </div>
  </button>
`


// .d8888b.   .d8888b.   .d8888b.  
// d88P  Y88b d88P  Y88b d88P  Y88b 
// 888    888 Y88b.      Y88b.      
// 888         "Y888b.    "Y888b.   
// 888            "Y88b.     "Y88b. 
// 888    888       "888       "888 
// Y88b  d88P Y88b  d88P Y88b  d88P 
//  "Y8888P"   "Y8888P"   "Y8888P"  


buttonCrud.template.css = ({
    button = {
    	boxModel: {
    		content: { width: '100%', height: '5rem' },
//				border: { radius: { tl: { t: '100%', l: '100%' }} } // NOT WORKING!!!
    	},
    	background1: { color: globalData.color.bg },
    	background2: { color: globalData.color.bg }
    },
    label = { font: { color: 'black', size: '3rem' } },
    check = {
    	font: { color: 'green' },
    	background: { color: '#27ae60' }
    },
    action = { font: { color: 'black'} },
    div = {
    	boxModel: { content: { width: '0.2rem', height: '70%' } },
    	background: { color: '#a53125', }
    }
}) => `
  <style>
  	${boilerplate}
    * {font-family: Arial;}
    .button {
     	${flex({ align: 'center' })}
     	${background(button.background1)}
      ${boxModel.content(button.boxModel.content)}
      border-top-left-radius: 100%;
      border-top-right-radius: 100%;
      cursor: pointer;
    }

    .sub, .sup {
      font-size: 1.5rem;
    }

    .question-counter {
      font-size: 2rem;
      align-self: flex-end;
      margin-left: 10%;
      font-family: monospace;
    }

    .label {
      ${(({ width, height}) => `width: calc(${width} - ${height});`)(button.boxModel.content)}
      ${font(label.font)}
    }
    .icon-container {
      ${(({ height }) => 
        `width: min-width;` +
        `font-size: calc(${height} / 1.6);`
      )(button.boxModel.content)}
      margin-right: 10%;
      align-self: flex-end;
    }
    .check {${font(check.font)}}
    .action {${font(action.font)}}

    .button.success .icon-container, .button:hover .icon-container {width: 100%;}
    .check.success , .button:hover .icon-container * {
    	font-size: ${button.boxModel.content.height};
    }

    .check, .action.success, .label.success, .button:hover > .label {display: none;}



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


buttonCrud.innerHTML = buttonCrud.template.css({}) + buttonCrud.template.html({})
customElements.define('button-crud',
  class extends HTMLElement {
    constructor() {
      super()
      
      this
        .attachShadow({mode: 'open'})
        .appendChild(buttonCrud.content.cloneNode(true));

      // Selected Elements
      const btn = $(this)('.button')
      const label = $(this)('.label')
      const action = $(this)('.action')
      const check = $(this)('.check')
      const questionCounter = $(this)('.question-counter')
      const sub = $(this)('.sub')
      const sup = $(this)('.sup')


      // Custom Element Attribute Data
      const type = this.getAttribute('type')
      const text = this.getAttribute('text')

      // Attribute Data Connections
      btn.type = type
      label.innerText = text


      {// Generate Question Count
        const { limit, outputs } = globalData
        const { questions } = limit
//        const sub = ['₀', '₁', '₂', '₃', '₄', '₅', '₆', '₇', '₈', '₉']
//        const sup = ['⁰', '¹', '²', '³', '⁴', '⁵', '⁶', '⁷', '⁸', '⁹']
        const convert = (n, type) => n.toString().split('').map(a => type[parseInt(a)]).join('')
//        const generateFraction = () => 
//          questionCounter.innerText = convert(outputs.length + 1, sup) + '⁄' + convert(questions, sub)
        const generateFraction = () => {
          sub.innerText = questions
          sup.innerText = outputs.length + 1
        }
        generateFraction()        
        btn.addEventListener('click', () => 
          outputs.length + 2 <= parseInt(questions) ?
          setTimeout(() => generateFraction(), globalData.delay) :
          null
        )
      }// Generate Question Count

      globalData.elements.submit = this

    }

    static get observedAttributes() {
      return ['text'];
    }
    attributeChangedCallback(name, v1, v2) {
    	name === 'text' ? $(this)('.label').innerHTML = v2 : null
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
  <button-crud
    type="button"
    text="BUTTON LABEL"
  >
  </button-crud>
*/ 
