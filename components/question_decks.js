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
			  <div class="setting question-count">
				  <label>Questions</label>
				  <input type="number" min="1" max="1000" value="5" class="question-number">
				  <input type="range" min="1" max="1000" value="5" class="question-slider">
			  </div>
			  <div class="setting answer-count">
				  <label>Answers</label>
				  <input type="number" min="1" max="30" value="9" class="answer-number">
				  <input type="range" min="1" max="30" value="9" class="answer-slider">
			  </div>
			  <div class="setting correctAnswer-count">
				  <label>Right Answers</label>
				  <input type="number" min="1" max="3" value="3" class="correct-answer-number">
				  <input type="range" min="1" max="3" value="3" class="correct-answer-slider">
			  </div>
        <div class="setting next-question-delay">
				  <label>Feedback Time</label>
				  <input type="number" min="0" max="2000" value="600" class="next-question-delay-number">
				  <input type="range" min="0" max="2000" value="600" class="next-question-delay-slider">
			  </div>
        <div class="setting app-height">
				  <label>App Height</label>
				  <input type="number" min="0" max="30" value="15" class="app-height-number">
				  <input type="range" min="0" max="30" value="15" class="app-height-slider">
			  </div>
        <tr>
          <a class="lp" href="https://liberapay.com/TerranceBanh/donate"><img alt="Donate using Liberapay" src="https://liberapay.com/assets/widgets/donate.svg"></a>
          <a href="https://www.youtube.com/channel/UCYJFMSYRjnR8-lXvsKAfsDw" class="yt" colspan="1"><svg viewBox="0 267.07 1800 1260.02" width="42.667142857142856" height="30" xmlns="http://www.w3.org/2000/svg">
    <path d="M711 1128l484-250-484-253v503zm185-862c377 0 627 18 627 18 35 4 112 4 180 76 0 0 55 54 71 178 19 145 18 290 18 290v136s1 145-18 290c-16 123-71 178-71 178-68 71-145 71-180 75 0 0-250 19-627 19-466-4-609-18-609-18-40-7-130-5-198-76 0 0-55-55-71-178C-1 1109 0 964 0 964V828s-1-145 18-290c16-124 71-178 71-178 68-72 145-72 180-76 0 0 250-18 627-18z"/>
</svg></a>
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
        </tr>
      </div>
		</div>

    <button class="stats-button">Stats</button>
    <div class="stats-list-container">
      <table class="stats-list">
        <caption class="stats-title">Statistics</caption>

      </table>
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
  listing = {

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
  },
  settingsMenu = {
    background: { color: 'white' },
    boxModel: {
      padding: { all: '2rem' },
    },
  },
  settingsMenuContainer = {
    background: { color: '#0009' }
  },
  settingsButton = {
    boxModel: {
      content: { width: '8rem', height: '8rem' },
      padding: { all: '0' }
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
    .settings-button {
      ${all.position2}
      ${boxModel.padding(settingsButton.boxModel.padding)}
      ${boxModel.content(settingsButton.boxModel.content)}
    }
    .settings-menu-container, .stats-list-container {
      visibility: hidden;
      ${all.position1('absolute')}
      ${boxModel.content({ width: '100vw', height: '100vh' })}
      ${background(settingsMenuContainer.background)}
      z-index: 1;
    }
    .settings-title, .stats-title {
      background: white;
      display: table-caption;
      text-align: center;
      color: black;
      margin: 0;
      padding-top: 2rem;
      font-size: 4rem;
    }
    .settings-menu, .stats-list {
      display: table;
      ${background(settingsMenu.background)}
      ${boxModel.content({ width: 'max-content' })}
      ${boxModel.padding(settingsMenu.boxModel.padding)}
      ${all.position1('relative')}
    }
    .setting > label, .setting > input, .stats-list td {
      display: table-cell;
      height: 100%;
      font-size: 1.5rem;
      margin-top: 1rem;
      margin-bottom: 1rem;
      vertical-align: middle;
    }

    .setting {
      display: table-row;
    }
    [type="number"] {
      margin-right: 1rem;
    }
    label, .stats-list td  {
      padding-right: 1rem;
    }
		[type=number] { width: 60px;}
		[type=range] {width: 100px;}
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
    .stats-button {
      position: absolute;
      top: 0;
      right: 0;
      ${boxModel.padding(settingsButton.boxModel.padding)}
      ${boxModel.content(settingsButton.boxModel.content)}
    }
    .yt {
      fill: red;
    }
    .yt, .lp {
      position: relative;
    }
    .yt > *, .lp > * {
      transform: translateY(25%);
    }

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
      const statsContainer = $(this)('.stats-list-container')
      const stats = $(this)('.stats-list')
      const statsButton = $(this)('.stats-button')

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
      


      // Click outside Settings/Stats (1)
      let outsideClicked = false
      ;[settings, statsContainer].map(a => 
        a.addEventListener("mousedown", function (e) {
          if (this == e.target) outsideClicked = true
        })
      )
      // Click outside Settings/Stats (2)
      ;[settings, statsContainer].map(a => 
        a.addEventListener("mouseup", function (e) {
          if (outsideClicked && this == e.target) this.style.visibility = 'hidden'
          outsideClicked = false
        })
      )

      // Makes settings appear when settings/Stats button is clicked
      settingsButton.addEventListener("click", () => settings.style.visibility = 'visible')
      statsButton.addEventListener("click", () => statsContainer.style.visibility = 'visible')


      const settingNames = 
      $(this)('.settings-menu')
        .children
        .values()
        .filter(a => a.classList[0] === 'setting')
        .map(a => 
          a
            .classList[1]
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

      const categoryStats = answers
        .map(a => 
          a[1]
            .map(a => a.values().length)
            .reduce((a,b) => a + b)
        )
      const charStat = Array.from(
          new Set(
            answers
              .values()
              .flat()
              .map(a => a.ch)
              .reduce((a,b) => a + b)
              .split('')
              .filter(a => !['，', '？', '。', '/'].some(b => a === b)),

          )// Set End
        )// Array End

      {
        const number = categoryStats // Generate Category Stats
          .map(a => { 
            const category = document.createElement('td')
            const number = document.createElement('td')
            const row = document.createElement('tr')
            const text = document.createTextNode(a[0])
            const n = document.createTextNode(a[1])
            appendElements({
              e : row, c: [
	              {e : category, c: [{e: text}]},
	              {e : number,c: [{e: n}]},
              ]
            })
            stats.appendChild(row)
            return a
          })
          .values()
          .map((a) => a[1])
          .reduce((a,b) => a + b)

          appendElements({
            e : stats, c: [
              {e : document.createElement('tr'), c: [
                {e: document.createElement('td'), c: [document.createTextNode('Total Possible Questions')] },
                {e: document.createElement('td'), c: [document.createTextNode(number)] }
              ]},
            ]
          })
      }

      {// Generate Total Characters Stat
        const total = document.createElement('td')
        const number = document.createElement('td')
        const text = document.createTextNode('Total Characters')
        const n = document.createTextNode(charStat.length)
        appendElements({
          e : stats, c: [
            {e : total, c: [{e: text}]},
            {e : number, c: [{e: n}]},
          ]
        })
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
	<questionDecks->AUDIO FILE HERE</questionDecks>
*/ 

