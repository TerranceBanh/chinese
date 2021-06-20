'use strict'
// Initial Template Code
const question = document.createElement('template')
question.template = {}


// 888    888 88888888888 888b     d888 888      
// 888    888     888     8888b   d8888 888      
// 888    888     888     88888b.d88888 888      
// 8888888888     888     888Y88888P888 888      
// 888    888     888     888 Y888P 888 888      
// 888    888     888     888  Y8P  888 888      
// 888    888     888     888   "   888 888      
// 888    888     888     888       888 88888888                            


question.template.html = ({}) => `
	<div class="container"></div>
`


// .d8888b.   .d8888b.   .d8888b.  
// d88P  Y88b d88P  Y88b d88P  Y88b 
// 888    888 Y88b.      Y88b.      
// 888         "Y888b.    "Y888b.   
// 888            "Y88b.     "Y88b. 
// 888    888       "888       "888 
// Y88b  d88P Y88b  d88P Y88b  d88P 
//  "Y8888P"   "Y8888P"   "Y8888P"  


question.template.css = ({
	container = {
		background: { color: globalData.color.bg },
		font: { color: 'black', align: 'center', size: '5rem' }
	}

}) => `
  <style>
  	${boilerplate}
  	.container {
  		display: flex;
  		justify-content: center;
  		align-items: center;
  		${boxModel.content({ width: '100%', height: '100%' })}
  		${background(container.background)}
  		${font(container.font)}
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


question.innerHTML = question.template.css({}) + question.template.html({})
customElements.define('question-',
  class extends HTMLElement {
    constructor() {
      super()
      
      this
        .attachShadow({mode: 'open'})
        .appendChild(question.content.cloneNode(true))

      globalData.elements.question = this

    }
    
    static get observedAttributes() {
      return ['text']
    }
    // 
    attributeChangedCallback(name, data1, data2) {
    	if (name === 'text') {
    		if (data2.includes('.(🎵)')) $(this)('.container').innerHTML = `<audio->${data2}</audio->`
    		else $(this)('.container').innerHTML = data2
    	}
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
	<question- text=""></question->
*/ 
