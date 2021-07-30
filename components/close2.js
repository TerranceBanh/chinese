'use strict'
// Initial Template Code
const close2 = document.createElement('template')
close2.template = {}


// 888    888 88888888888 888b     d888 888      
// 888    888     888     8888b   d8888 888      
// 888    888     888     88888b.d88888 888      
// 8888888888     888     888Y88888P888 888      
// 888    888     888     888 Y888P 888 888      
// 888    888     888     888  Y8P  888 888      
// 888    888     888     888   "   888 888      
// 888    888     888     888       888 88888888                            


close2.template.html = ({}) => `
	<div class="container">
		<div class="x1"></div>
		<div class="x2"></div>
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


close2.template.css = ({
  x = {
    boxModel: { content: { width: '2rem', height: '0.4rem' } },
    background: { color: 'gray' },
  },
  container = {
    boxModel: { 
      content: { width: '3rem', height: '3rem' },
      margin: { tb: '1rem', lr: '1rem' },
    },
    background: { color: '' },    
  }
}) => `
  <style>
  ${boilerplate}

	.container {
    position: absolute;
    ${background(container.background)}
    ${boxModel.content(container.boxModel.content)}
    ${boxModel.margin(container.boxModel.margin)}
    top: 0;
    right: 0;
	}

	.x1, .x2 {
		position: absolute;
    ${boxModel.content(x.boxModel.content)}
		top: calc(50% - (${x.boxModel.content.height} / 2));
		left: calc(50% - (${x.boxModel.content.width} / 2));
    ${background(x.background)}
	}
	.x1 {
		transform: rotate(45deg);
	}
	.x2 {
		transform: rotate(-45deg);
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


close2.innerHTML = close2.template.css({}) + close2.template.html({})
customElements.define('close2-',
  class extends HTMLElement {
    constructor() {
      super()
      
      this
        .attachShadow({mode: 'open'})
        .appendChild(close2.content.cloneNode(true))


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
		<close2-></close2->
*/ 
