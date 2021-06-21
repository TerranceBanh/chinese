'use strict'
// Initial Template Code
const score = document.createElement('template')
score.template = {}


// 888    888 88888888888 888b     d888 888      
// 888    888     888     8888b   d8888 888      
// 888    888     888     88888b.d88888 888      
// 8888888888     888     888Y88888P888 888      
// 888    888     888     888 Y888P 888 888      
// 888    888     888     888  Y8P  888 888      
// 888    888     888     888   "   888 888      
// 888    888     888     888       888 88888888                            


score.template.html = ({}) => `
	<div class="container">
		<div class="right">
			<sup class="numerator"></sup>
			&frasl;
			<sub class="denominator"></sub>
		</div>
		<div class="miss">
			<sup class="numerator"></sup>
			&frasl;
			<sub class="denominator"></sub>
		</div>
		<div class="wrong">
			<sup class="numerator"></sup>
			&frasl;
			<sub class="denominator"></sub>
		</div>
    <div class="overview"></div>
    <div class="font-size"></div>
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


score.template.css = ({
	
}) => `
  <style>
  	${boilerplate}
  	.right, .miss, .wrong, .overview { 
  		${ flex({ align: 'center', justify: 'space-around' }) }
  		${ boxModel.content({ width: '100vw', height: 'calc(100vh / 3)' })}
  		
  		font-size: 100px;
  	}
  	.wrong { color: red; }
    .miss { color: yellow; }
  	.right { color: green; }
    .overview {}
    .font-size { font-size: 1ch; }
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


score.innerHTML = score.template.css({}) + score.template.html({})
customElements.define('score-',
  class extends HTMLElement {
    constructor() {
      super()
      
      this
        .attachShadow({mode: 'open'})
        .appendChild(score.content.cloneNode(true))


			this.style.display = 'none'

//      const overview = $(this)('.overview')
//      const fontSize = $(this)('.font-size')
//      console.log(fontSize.computedStyle('font-size').parseInt())
//      console.log(overview.computedStyle('font-size').parseInt())
//      console.log(overview.computedStyle('width').parseInt())
//      console.log(overview.computedStyle('width').parseInt() % fontSize.computedStyle('font-size').parseFloat())
//      console.log(overview.textContent.length)
//
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
	<score-></score->
*/ 
