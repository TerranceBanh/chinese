'use strict'
// Initial Template Code
const questionPacks = document.createElement('template')
questionPacks.template = {}


// 888    888 88888888888 888b     d888 888      
// 888    888     888     8888b   d8888 888      
// 888    888     888     88888b.d88888 888      
// 8888888888     888     888Y88888P888 888      
// 888    888     888     888 Y888P 888 888      
// 888    888     888     888  Y8P  888 888      
// 888    888     888     888   "   888 888      
// 888    888     888     888       888 88888888                            


questionPacks.template.html = ({}) => `
	<div class="listing"></div>
`


// .d8888b.   .d8888b.   .d8888b.  
// d88P  Y88b d88P  Y88b d88P  Y88b 
// 888    888 Y88b.      Y88b.      
// 888         "Y888b.    "Y888b.   
// 888            "Y88b.     "Y88b. 
// 888    888       "888       "888 
// Y88b  d88P Y88b  d88P Y88b  d88P 
//  "Y8888P"   "Y8888P"   "Y8888P"  


questionPacks.template.css = ({
  all = {
    position1: (p) => `
      position: ${p};
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `,
    position2: `
			position: absolute;
			top: 0;
			left: 0;
    `,
    btnBW: '0.5rem',
    btnC1: '#CCC',
    btnC2: '#999',
  },
  button = {
    background: { color: '#DDD' },
    boxModel: {
      content: { minWidth: 'max-content', minHeight: 'max-content' },
      padding: { all: '1rem' },
      border: {
        t: { width: all.btnBW, style: 'solid', color: all.btnC1 },
        b: { width: all.btnBW, style: 'solid', color: all.btnC2 },
        l: { width: all.btnBW, style: 'solid', color: all.btnC1 },
        r: { width: all.btnBW, style: 'solid', color: all.btnC2 },
      },
    },
    active: {
      boxModel: {
        border: {
          t: { width: all.btnBW, style: 'solid', color: all.btnC2 },
          b: { width: all.btnBW, style: 'solid', color: all.btnC1 },
          l: { width: all.btnBW, style: 'solid', color: all.btnC2 },
          r: { width: all.btnBW, style: 'solid', color: all.btnC1 },
        },
      },
    }
  }
}) => `
  <style>
		.listing {
      overflow-y: auto;
      height: 85vh;
			${ flex({ wrap: 'wrap', align: 'center', justify: 'center' })}
      background: khaki;
      display: none;
		}
    .button {
      ${background(button.background)}
      ${boxModel.content(button.boxModel.content)}
      ${boxModel.border(button.boxModel.border)}
      ${boxModel.padding(button.boxModel.padding)}
      margin: 0;
    }
    .button:active {
      ${boxModel.border(button.active.boxModel.border)}
    }
    .img {}
    .label {}
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


questionPacks.innerHTML = questionPacks.template.css({}) + questionPacks.template.html({})
customElements.define('question-packs',
  class extends HTMLElement {
    constructor() {
      super()
      
      this
        .attachShadow({mode: 'open'})
        .appendChild(questionPacks.content.cloneNode(true))

 
      const listing = $(this)('.listing')
      globalData.elements.packs = listing



			// MAKE INTO COMPONENT
			const generate = (data) => {
				this.style.display = 'none'
        globalData.decksData = data
				const questionDecks = $('<question-decks></question-decks>')
				document.body.appendChild(questionDecks)
				const stats = $('<stats-></stats->')
				document.body.appendChild(stats)
			}

      globalData.packsData.forEach(a => {
        const button = $('<button></button>', { classList: 'button' })
        const img = $('$<img></img>', { classList: 'img', src: 'https://via.placeholder.com/100/FFA/000', draggable: false })
        const p = $(`<p>${a}</p>`, { classList: 'label' })

        button.addEventListener('click', () => {
          globalData.chosenPack = p.textContent
          generate(window[a])
        })

        button.appendChild(img)
        button.appendChild(p)
        listing.appendChild(button)
      })



      const buttons = listing.querySelectorAll('.button').toArray()
			const getComputedWidth = (x) => window.getComputedStyle(x).width.replace('px', '').parseFloat() // Gets width of element
			const currentContainerWidth = () => getComputedWidth(listing) // Current Width Container
			const sqrtTotalButtons = buttons.length.sqrt().ceil() // Square Root Of Total Answers

			const buttonLongWidth = () => // Width Of Longest Answer
			  buttons
				  .map(a => /* 1 */ getComputedWidth(a).ceil())
				  .reduce((a,b) => a > b ? a : b)

      const readjustSize = () => {
        // Adjusts min & max based on Adjusted button widths
			  listing.style.minWidth = buttonLongWidth() + 'px'

			  // Changes All Answer Widths To Matching Widths
			  buttons.map(a => a.style.width = buttonLongWidth() + 'px')

			  // Adjust Card Width Based On Longest Answer Width
			  for (let i = sqrtTotalButtons; i > 0; i--) {
				  if (window.innerWidth >= i * buttonLongWidth()) {
            // Some how this comes to be off by 1 pixel running it once
					  listing.style.width = (i * buttonLongWidth()) + getScrollbarWidth() + 'px'
					  listing.style.width = (i * buttonLongWidth()) + getScrollbarWidth() + 'px'
            // Adjust without scrollbar if no scroll needed
            break
          }
				  else continue
			  }
      }

      window.addEventListener('load', () => {
        listing.style.display = 'flex'
        readjustSize()
        // Button size would vary without load event
      })
      window.addEventListener('resize', () => readjustSize())

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
	<question-packs></question-packs>
*/ 

