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
	<div class="listing">
    <button class="settings-button">Settings</button>
		<div class="settings-menu-container">
      <div class="settings-menu">
        <h1 class="settings-title">Settings</h1>
			  <div class="question-count">
				  <label>Question Count</label>
				  <input type="number" min="1" max="1000" value="5" class="question-number">
				  <input type="range" min="1" max="1000" value="5" class="question-slider">
			  </div>
			  <div class="answer-count">
				  <label>Answer Count</label>
				  <input type="number" min="1" max="30" value="9" class="answer-number">
				  <input type="range" min="1" max="30" value="9" class="answer-slider">
			  </div>
			  <div class="correctAnswer-count">
				  <label>Correct Answer Count</label>
				  <input type="number" min="1" max="3" value="3" class="correct-answer-number">
				  <input type="range" min="1" max="3" value="3" class="correct-answer-slider">
			  </div>
        <div class="next-question-delay">
				  <label>Next Question Delay</label>
				  <input type="number" min="0" max="2000" value="600" class="next-question-delay-number">
				  <input type="range" min="0" max="2000" value="600" class="next-question-delay-slider">
			  </div>
        <div class="app-height">
				  <label>App Height (To Fix Mobile View)</label>
				  <input type="number" min="0" max="30" value="15" class="app-height-number">
				  <input type="range" min="0" max="30" value="15" class="app-height-slider">
			  </div>
        
        <a href="https://liberapay.com/TerranceBanh/donate"><img alt="Donate using Liberapay" src="https://liberapay.com/assets/widgets/donate.svg"></a>
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


questionDecks.template.css = ({
  button = {
    background: { color: '#DDD' },
    boxModel: {
      content: { minWidth: 'max-content', minHeight: 'max-content' },
      padding: { all: '1rem' },
      border: {
        t: { width: '0.5rem', style: 'solid', color: '#CCC' },
        b: { width: '0.5rem', style: 'solid', color: '#999' },
        l: { width: '0.5rem', style: 'solid', color: '#CCC' },
        r: { width: '0.5rem', style: 'solid', color: '#999' },
      },
    },
    active: {
      boxModel: {
        border: {
          t: { width: '0.5rem', style: 'solid', color: '#999' },
          b: { width: '0.5rem', style: 'solid', color: '#CCC' },
          l: { width: '0.5rem', style: 'solid', color: '#999' },
          r: { width: '0.5rem', style: 'solid', color: '#CCC' },
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
      align-items: center;
      justify-content: center;
		}
    .settings-button {
			position: absolute;
			top: 0;
			left: 0;
      padding: 0;
      width: 8rem;
      height: 8rem;
    }
    .settings-menu-container {
			position: absolute;
      background: #0009;
      visibility: hidden;
      width: 100vw;
      height: 100vh;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .settings-title {
      width: min-content;
			position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .settings-menu {
			position: relative;
      background-color: white;
      width: max-content;
      padding: 2rem;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
		.question-count, .answer-count, .correctAnswer-count, .app-height {
			${ flex({ align: 'center' }) }
		}
		[type=number] { width: 60px;}
		[type=range] {width: 60px;}
    .button {
      ${background(button.background)}
      ${boxModel.content(button.boxModel.content)}
      ${boxModel.border(button.boxModel.border)}
      ${boxModel.padding(button.boxModel.padding)}
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
      const settings = $(this)('.settings-menu-container')
      const settingsButton = $(this)('.settings-button')

//      const { question, answer, correctAnswer, appHeight, nextQuestionDelay } = 
//
//        $(this)('.settings-menu').children.values().filter(a => a.classList[0] !== 'settings-title').map(a => a.classList[0])
//
//          .map(a => ({ 
//            name: a,
//            slider: $(this)(`.${a}`), 
//            number: $(this)(`.${a}`),
//          }))
//
//          .reduce((a, { name, slider, number }, c) => {
//            let obj = {}
//            const camalCase = (name) => name
//              .split('-')
//              .map((a,b) => b === 0 ? a : a.letterUp(0))
//              .join('')
//
//            if (c === 1) {
//              obj
//                .defineProperty(camalCase(a.name), { value: { slider: a.slider, number: a.number } })
//                .defineProperty(camalCase(name), { value: { slider, number } })
//            }
//            else obj.defineProperty(camalCase(name), { value: { slider, number } })
//            console.log(obj)
//            return obj
//          })


	    const question = {
		    slider: $(this)('.question-slider'),
		    number: $(this)('.question-number')	
	    }

	    const answer = {
		    slider: $(this)('.answer-slider'),
		    number: $(this)('.answer-number')	
	    }

	    const correctAnswer = {
		    slider: $(this)('.correct-answer-slider'),
		    number: $(this)('.correct-answer-number')	
	    }

      const appHeight = {
		    slider: $(this)('.app-height-slider'),
		    number: $(this)('.app-height-number')	
	    }

      const nextQuestionDelay = {
		    slider: $(this)('.next-question-delay-slider'),
		    number: $(this)('.next-question-delay-number')
      }

			// MAKE INTO COMPONENT
			const generate = (data) => {
				globalData.limit.questions = question.number.value
				globalData.limit.answers = answer.number.value
				globalData.limit.correctAnswers = correctAnswer.number.value
        globalData.limit.delay = nextQuestionDelay.number.value
				deckGen(data)
				this.style.display = 'none'
				const card = $('<card-></card->')
				card.setAttribute('mode', 'grid')
				document.body.prepend(card)
				globalData.answersData = data
			}
      globalData.decksData.forEach((a,b) => {
        const button = $('<button></button>', { classList: 'button' })
        const img = $('$<img></img>', { classList: 'img', src: 'https://via.placeholder.com/100/FFA/000', draggable: false })
        const p = $(`<p>${a}</p>`, { classList: 'label' })

        button.addEventListener('click', () => generate(answers[a]))

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
      window.addEventListener('resize', () => {
        readjustSize()
      })
      


      // Click outside Settings (1)
      let outsideClicked = false
      settings.addEventListener("mousedown", function (e) {
        if (this == e.target) outsideClicked = true
      })

      // Click outside Settings (2)
      settings.addEventListener("mouseup", function (e) {
        if (outsideClicked && this == e.target) this.style.visibility = 'hidden'
        outsideClicked = false
      })

      // Makes settings appear when settings button is clicked
      settingsButton.addEventListener("click", () => {
        settings.style.visibility = 'visible'
      })

      const settingNames = 
      $(this)('.settings-menu')
        .children
        .values()
        .filter(a => a.classList[0] !== 'settings-title')
        .map(a => 
          a
            .classList[0]
            .split('-')
            .map((a,b) => b === 0 ? a : a.letterUp(0))
            .join('')
        )
			;[question, answer, correctAnswer, nextQuestionDelay, appHeight].forEach(({ number, slider}, b) => {
				slider.addEventListener('input', () => number.value = slider.value)
				number.addEventListener('keypress', e => !!e.key.match(/[0-9]/) ? null : e.preventDefault())
				number.addEventListener('keydown', e => e.keyCode === 13 && number.value === '' ? number.value = number.min : null)
        number.addEventListener('keydown', function (e) {if (e.keyCode === 13) this.blur()} )
				number.addEventListener('input', () => {
					if (parseInt(number.value) > parseInt(number.max)) {
						number.value = number.max
						slider.value = number.max
					}
					else if (number.value === '') slider.value = slider.min
					else slider.value = number.value
				})
				;[slider, number]
					.forEach(a => {
            a.addEventListener('blur', () => 
              number.value === '0' ? number.value = number.min : null
            )
            a.addEventListener('input', () => { 
              localStorage.setItem(settingNames[b], a.value)
            })
					})

        window.addEventListener('load', () => {
          if (localStorage.getItem(settingNames[b]) !== null) {
            slider.value = localStorage.getItem(settingNames[b])
            number.value = localStorage.getItem(settingNames[b])
          }
        })


			})

      // App Height Settings
      const appHeightStore = !!localStorage.getItem('appHeight') ? localStorage.getItem('appHeight').parseInt() : ''
      if (appHeightStore !== '') {
        listing.style.height = appHeightStore + 70 + 'vh'
        globalData.limit.appHeight = appHeightStore
      }
      appHeight.map(a => {
        a[1].addEventListener('input', () => {
          listing.style.height = a[1].value.parseInt() + 70 + 'vh'
          globalData.limit.appHeight = a[1].value.parseInt()
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
	<questionDecks->AUDIO FILE HERE</questionDecks>
*/ 

