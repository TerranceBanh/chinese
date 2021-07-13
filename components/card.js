'use strict'
// Initial Template Code
const card = document.createElement('template')
card.template = {}


// 888    888 88888888888 888b     d888 888      
// 888    888     888     8888b   d8888 888      
// 888    888     888     88888b.d88888 888      
// 8888888888     888     888Y88888P888 888      
// 888    888     888     888 Y888P 888 888      
// 888    888     888     888  Y8P  888 888      
// 888    888     888     888   "   888 888      
// 888    888     888     888       888 88888888                            


card.template.html = ({}) => `
	<div class="container">
		<slot class="question" name="question"></slot>
		<div class="answers-container"></div>
		<slot class="submit" name="submit"></slot>
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


card.template.css = ({
	container = {
		background: { color: 'white' }
	}
}) => `
  <style>
  	${boilerplate}
  	.container {
  		${background(container.background)}
  		height: 85vh;
  		display: flex;
  		flex-direction: column;
  	}
  	.question {
  		height: max-content;
  		max-height: 30%;
  		flex: 1000 0 auto;
  	}
  	.answers-container {
  		display: flex;
  		flex-flow: row wrap;
  		justify-content: space-around;
  		align-items: center;
  		overflow-y: auto;
  		flex: 1 1 auto;
      padding-bottom: 5%;
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


card.innerHTML = card.template.css({}) + card.template.html({})
customElements.define('card-',
  class extends HTMLElement {
    constructor() {
      super()
      
      this
        .attachShadow({mode: 'open'})
        .appendChild(card.content.cloneNode(true))


			// Selected Elements
			const container = $(this)('.container')
			const question = $(`<question-></question->`, { slot: "question", className: 'question' })
			const answersContainer = $(this)('.answers-container')
			const submit = $('<button-crud></button-crud>')
			submit.setAttribute('text', 'Next')
			submit.setAttribute('type', 'button')


			// Shared Functions
			const generateQuestion = () => question.setAttribute("text", globalData.cards[globalData.current].question)
			const generateAnswers = () => answersContainer.innerHTML = globalData.cards[globalData.current].answers.map(a => // Add Answers
				`<checkbox-label>${a}</checkbox-label>`
			).join('')

      container.style.height = globalData.limit.appHeight + 70 + 'vh'

			{// GENERATE QUESTIONS & ANSWERS START /* 2 */
				generateQuestion()
				$(this)('.question').parentNode.replaceChild(question, $(this)('.question'))
				$(this)('.submit').parentNode.replaceChild(submit, $(this)('.submit'))
				generateAnswers()
			}// GENERATE QUESTIONS & ANSWERS END

      {// ADD ANSWER ELEMENTS TO GLOBAL DATA START
        globalData.elements.inputs = Object.values(answersContainer.children)
      }// ADD ANSWER ELEMENTS TO GLOBAL DATA END

			// Variables To Calculate Card Width
			const getComputedWidth = (x) => parseFloat(window.getComputedStyle(x).width.replace('px', '')) // Gets width of element
			const currentContainerWidth = () => getComputedWidth(container) // Current Width Container
			const sqrtTotalAnswers = Math.floor(Math.sqrt(answersContainer.children.length)) // Square Root Of Total Answers
			const answerLongWidth = () => {
			return Object
				.values(answersContainer.children)
				.map(a => /* 1 */{
					return Math.ceil(getComputedWidth(a))
				})
				.reduce((a,b) => a > b ? a : b)
			}  // Width Of Longest Answer

			const answerContainerResize = () => {
				container.style.minWidth = answerLongWidth() + 'px'
				container.style.maxWidth = sqrtTotalAnswers * answerLongWidth() + (answersContainer.offsetWidth - answersContainer.clientWidth) + 'px'
			}

      // ADD A MAX WIDTH OF VIEWPORT!!!

			const grid = () => {
				// Variables
				const answers = Object.values(answersContainer.children)				
				let longestWidth = answers
					.map(a => getComputedWidth(a.shadowRoot.querySelector('.container')))
					.reduce((a,b) => a > b ? a : b)

//				let longestHeight = answers
//					.map(a => getComputedWidth(a.shadowRoot.querySelector('.container')))
//					.reduce((a,b) => a > b ? a : b)

        // ADUST HEIGHT OF ANSWER BOXES
        // RESET BOX SIZES WHEN RESIZING WINDOW

        longestWidth = longestWidth > window.innerWidth ? window.innerWidth : longestWidth

				// Changes All Answer Widths To Matching Widths
				answers.map(a => a.shadowRoot.querySelector('.container').style.width = longestWidth + 'px')

				// Adjust Card Width Based On Longest Answer Width
				for (let i = sqrtTotalAnswers; i > 0; i--) {
					if (currentContainerWidth() < i * answerLongWidth()) continue
					else {
						container.style.width = i * answerLongWidth + (answersContainer.offsetWidth - answersContainer.clientWidth) + 'px'
						break
					}
				}
			}


			// Calculate Width Of Card To Maintain Square Look
			$('question-decks').addEventListener('click', () => {
				grid()
				answerContainerResize()				
			})
			
			// Calculate Width Of Card On Resize To Maintain Square Look
			window.addEventListener('resize', () => {
				container.style.width = ''
				grid()
				answerContainerResize()
			})

			{// SUBMITION START
				submit.addEventListener('click', () => {
					const currentCount = globalData.current
					const questionCount = globalData.cards.length
					if (currentCount === questionCount || submit.disabled) {return} // Stop Function Once All Answers Have Been Finished
					submit.disabled ? null : submit.disabled = true
					const currentAnswers = Object.values(answersContainer.children)
					const currentQuestion =  globalData.cards[globalData.current].question
         


					{// STORE USER INPUTS START
						globalData.cards[currentCount].answersChosen = []
						currentAnswers
							.map(a =>
								globalData.cards[currentCount].answersChosen.push(a.shadowRoot.querySelector('.input').checked)
							)	
					}// STORE USER INPUTS END


					{// STORE ANSWER STATS START
            globalData.cards[currentCount].answersLegend = []
            globalData.cards[currentCount].select = { right: 0, wrong: 0 }
            globalData.cards[currentCount].unselect =  { right: 0, wrong: 0 }


						for (let i = 0, len = currentAnswers.length; i < len; i++) {
              const update = (answerType) => {
								globalData.score[answerType]++
								if (answerType !== 'miss') globalData.cards[currentCount]['select'][answerType]++
								currentAnswers[i].shadowRoot.querySelector(`.${answerType}`).style.display = 'block'
                globalMethods.newInputColor(globalData.elements.inputs[i], 'checkbox', globalData.color[`${answerType}1`])
								globalMethods.newInputColor(globalData.elements.inputs[i], 'background', globalData.color[`${answerType}2`])
              }
							// Checks Global Data For Correct Answer
							const correctAnswer = globalData.cards[currentCount].rights
								.some(a => 
                  a === globalData.cards[currentCount].answers[i]
                )

							// Checks If Input Is Checked
							const selected = currentAnswers[i].shadowRoot.querySelector('.input').checked

							// Store Correct Answer Stats
							if (correctAnswer) {
								globalData.cards[currentCount].answersLegend.push('✅')
								if (selected) update('right')
								else update('miss')
								if (!selected) globalData.cards[currentCount].unselect.right++
							}
							// Store Incorrect Answer Stats
							else {
								globalData.cards[currentCount].answersLegend.push('❌')								
								if (selected) update('wrong')
								if (!selected) globalData.cards[currentCount].unselect.wrong++
							}
						}
						

					}// STORE ANSWER STATS END


          {// Score Overview
            const selectedCorrect = globalData.cards[globalData.current].select.right
            const selectedWrong = globalData.cards[globalData.current].select.wrong
            const totalCorrect = parseInt(globalData.limit.correctAnswers)
            const rightSound = new Audio('correct.wav')
            const wrongSound = new Audio(`incorrect.wav`)
            if (selectedCorrect - selectedWrong === totalCorrect) {
              globalData.score.overview.push('🟩')
              rightSound.play()
              globalMethods.newSubmitColor(globalData.color.right2)
            }
            else if (selectedCorrect - selectedWrong >= totalCorrect / 2) {
              globalData.score.overview.push('🟨')
              wrongSound.play()
              globalMethods.newSubmitColor(globalData.color.miss2)
            }
            else {
              globalData.score.overview.push('🟥')
              wrongSound.play()
              globalMethods.newSubmitColor(globalData.color.wrong2)
            }
          }// Score Overview

				
					{// GENERATE NEW QUESTION & ANSWERS START
						globalData.current++
						{// DISPLAY SCORE
							if (currentCount === questionCount - 1) {
                setTimeout(() => {
								  const score = document.querySelector('score-').shadowRoot
								  const right = {
									  numerator: score.querySelector('.right .numerator'),
									  denominator: score.querySelector('.right .denominator'),
								  }

                  const miss = {
									  numerator: score.querySelector('.miss .numerator'),
									  denominator: score.querySelector('.miss .denominator'),
								  }
	  
								  const wrong = {
									  numerator: score.querySelector('.wrong .numerator'),
									  denominator: score.querySelector('.wrong .denominator'),
								  }
								  right.numerator.textContent = globalData.score.right
								  right.denominator.textContent = globalData.total.right
								  miss.numerator.textContent = globalData.score.miss
								  miss.denominator.textContent = globalData.total.right
								  wrong.numerator.textContent = globalData.score.wrong
								  wrong.denominator.textContent = globalData.total.wrong
                  score.querySelector('.title').innerText = globalData.chosenDeck + ` (${globalData.limit.questions})`
//                  score.querySelector('.overview').textContent = globalData.score.overview.join('')
								  
								  this.style.display = 'none'
								  document.querySelector('score-').style.display = 'block'
    						}, globalData.limit.delay)
							}
              
						}// DISPLAY SCORE
						
						if (currentCount === questionCount - 1) {return} // Prevents From Trying To Push To Non-Existent Array Element
						
						setTimeout(() => {// Gives time to show wrong/right answer feedback
							generateQuestion()
							generateAnswers()
							globalData.elements.inputs = Object.values(answersContainer.children)
							{// REALIGN ELEMENTS START
								container.style.width = ''
								answerContainerResize()
                grid()
							}// REALIGN ELEMENTS END
							submit.disabled = false
						}, globalData.limit.delay)
					}// GENERATE NEW QUESTION & ANSWERS	END

					
				})
			}// SUBMITION END

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

// /* 1 */ Using Math.ceil due to calculating lengths up to a certain decimal place
// /* 2 */ Using .innerHTML due to .append/.appendChild not working for custom elements

/*  HTML TEMPLATE
	<card-></card->
*/ 
