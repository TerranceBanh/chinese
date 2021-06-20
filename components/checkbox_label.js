'use strict'
// Initial Template Code
const checkboxLabel = document.createElement('template')
checkboxLabel.template = {}


// 888    888 88888888888 888b     d888 888      
// 888    888     888     8888b   d8888 888      
// 888    888     888     88888b.d88888 888      
// 8888888888     888     888Y88888P888 888      
// 888    888     888     888 Y888P 888 888      
// 888    888     888     888  Y8P  888 888      
// 888    888     888     888   "   888 888      
// 888    888     888     888       888 88888888                            


checkboxLabel.template.html = ({}) => `
  <label class="container">
		<input class="input" type="checkbox"/>
    <label class="label"></label>
   	<label class="box">
   		<label class="right"></label>
   		<label class="wrong">
				<div class="x1"></div>
				<div class="x2"></div>
   		</label>
   		<label class="miss"></label>
   	</label>
  </label>
`


// .d8888b.   .d8888b.   .d8888b.  
// d88P  Y88b d88P  Y88b d88P  Y88b 
// 888    888 Y88b.      Y88b.      
// 888         "Y888b.    "Y888b.   
// 888            "Y88b.     "Y88b. 
// 888    888       "888       "888 
// Y88b  d88P Y88b  d88P Y88b  d88P 
//  "Y8888P"   "Y8888P"   "Y8888P"  


checkboxLabel.template.css = ({
	container = { 
		boxModel: { 
			border: { 
				t: { width: '5px', style: 'solid' }, 
				r: { width: '10px', style: 'solid' },
				b: { width: '5px', style: 'solid' },
				l: { width: '10px', style: 'solid' }, 
				radius: { all: '0px' }
			} 
		},
	},
	label = {
		hover: { font: { color: 'blue' } },
		boxModel: { padding: { lr: '20px'} },
		font: { size: '2rem'}
	},
	input = {
		boxModel: { 
			content: { width: '22px', height: '22px',},
			border1: {
				all: { width: '2px', style: 'solid', color: 'black'}, 
				radius: { all: '3px' } 
			},
			border2: {
				all: { width: '2px', style: 'solid', color: 'blue' }
			}
		}
	}
}) => `
  <style>
  ${boilerplate}
  * {
    cursor: pointer;
  }
  .container {
  	${flex({})}
    position: relative;
    width: max-content;
    ${(({ t, r, b, l, radius }) => {
	    return (({ width, style }) => `
					${boxModel.border({
					 t, 
					 r: { width: `calc(${label.boxModel.padding.lr} + ${width})`, style}, 
					 b, 
					 l,
					 radius
					})}
		  `)(r)
    })(container.boxModel.border)}
  }
  .label {
  	${flex({ align: 'center' })}
  	${(({ content, padding, border, margin }, { width, height }, { all, radius }, { lr }) => `
			${content({ height: `calc(${height} + (${all.width} * 2))` })}
  		${padding({ l: `calc(${lr} + ${width} + (${all.width} * 2))` })}
  	`)(boxModel, input.boxModel.content, input.boxModel.border1, label.boxModel.padding)}
  	${font(label.font)}
  }
  
  .box {
    position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
    left: 0;
    ${boxModel.content(input.boxModel.content)}
    ${boxModel.border(input.boxModel.border1)}
  }
	.label:hover ~ .box, .box:hover, .box.hover {
		${boxModel.border(input.boxModel.border2)}
	}
	.label:hover, .container:hover {
    ${font(label.hover.font)}
 	}

 
 	.right {
 		display: none;
		transform: rotate(-45deg) scale(1);
		${(({ content, border }, { width }, { all }) => `
			${content({ width: `calc(${width} / 2)`, height: `calc(${width} / 4)` })}
			${border({ b: all, l: all })}
		`)(boxModel, input.boxModel.content, input.boxModel.border1)}
  }

	.wrong {
		display: none;
		width: min-content;
		height: min-content;
	}

	.x1, .x2 {
		position: absolute;
		width: 10px;
		height: 2px;
		top: calc(50% - (2px / 2));
		left: calc(50% - (10px / 2));
	}
	.x1 {
		transform: rotate(45deg);
	}
	.x2 {
		transform: rotate(-45deg);
	}

	.miss {
		display: none;
		width: 10px;
		height: 2px;
	}
	
  .input { display: none; }
  
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


checkboxLabel.innerHTML = checkboxLabel.template.css({}) + checkboxLabel.template.html({})
customElements.define('checkbox-label',
  class extends HTMLElement {
    constructor() {
      super()
      
      this
        .attachShadow({mode: 'open'})
        .appendChild(checkboxLabel.content.cloneNode(true))

			// Selected Elements
			const container = $(this)('.container')
			const label = $(this)('.label')
			const input = $(this)('.input')
			const box = $(this)('.box')

			// Attribute Connections
			container.setAttribute('for', this.getAttribute('id')) // this id > container id
			box.setAttribute('for', this.getAttribute('id')) // this id > box id
			label.setAttribute('for', this.getAttribute('id')) // this id > label id
			input.setAttribute('id', this.getAttribute('id')) // this id > input id

			this.innerHTML.includes('.(🎵)') ? label.innerHTML = `<audio->${this.innerHTML}</audio->` : label.appendChild($(`'${this.innerHTML}'`))
			this.innerHTML = ''

      
      globalMethods.newInputColor(this, 'background', globalData.color.deselect) // Make input white
			container.addEventListener('click', () => {
				input.checked ?
        globalMethods.newInputColor(this, 'background', globalData.color.select) :
        globalMethods.newInputColor(this, 'background', globalData.color.deselect)
			})
			// Highlight box on container hover
			this.addEventListener('mouseover', () => box.classList.add('hover'))
			this.addEventListener('mouseout', () => box.classList.remove('hover'))
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
		<checkbox-label id="ADD UNIQUE ID HERE!">ADD LABEL TEXT HERE!</checkbox-label>
*/ 
