'use strict'
// Initial Template Code
const questionDecks = document.createElement('template')
questionDecks.template = {}


// 888    888 88888888888 888b     d888 888      
// 888    888     888     8888b   d8888 888      
// 888    888     888     88888b.d88888 888      
// 8888888888     888     888Y88888P888 888      
// 888    888     888     888 Y888P 888 888      
// 888    888     888     888  Y8P  888 888      
// 888    888     888     888   "   888 888      
// 888    888     888     888       888 88888888                            


questionDecks.template.html = ({}) => `
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


questionDecks.template.css = ({
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


questionDecks.innerHTML = questionDecks.template.css({}) + questionDecks.template.html({})
customElements.define('question-decks',
  class extends HTMLElement {
    constructor() {
      super()
      
      this
        .attachShadow({mode: 'open'})
        .appendChild(questionDecks.content.cloneNode(true))

      const listing = $(this)('.listing')
      globalData.elements.decks = listing

      let wait = true

			// MAKE INTO COMPONENT
			const generate = (data) => {
        globalData.elements.settings.style.display = 'none'
        globalData.elements.stats.style.display = 'none'
				deckGen(data)
				this.style.display = 'none'
				const card = $('<card-></card->')
				card.setAttribute('mode', 'grid')
				document.body.prepend(card)
				globalData.answersData = data
			}
      globalData.decksData.keys().forEach(function (a,b,c) {
        const button = $('<button></button>', { classList: 'button' })
        const img = $('$<img></img>', { classList: 'img', src: 'https://via.placeholder.com/100/FFA/000', draggable: false })
        const p = $(`<p>${a}</p>`, { classList: 'label' })

        button.addEventListener('click', () => {
          globalData.chosenDeck = p.textContent
          generate(window[globalData.chosenPack][a])
        })

        button.appendChild(img)
        button.appendChild(p)
        listing.appendChild(button)

        if (c.length - 1 === b) {
          wait = false
        }
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


      const interval = setInterval(() => {
        listing.style.display = 'flex'
        readjustSize()
        // Button size would vary without load event
        if (!wait) clearInterval(interval)
      })
      window.addEventListener('resize', () => readjustSize())
      
      listing.style.height = globalData.elements.packs.style.height

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
	<question-decks></question-decks>
*/ 

