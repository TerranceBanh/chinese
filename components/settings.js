'use strict'
// Initial Template Code
const settings = document.createElement('template')
settings.template = {}


// 888    888 88888888888 888b     d888 888      
// 888    888     888     8888b   d8888 888      
// 888    888     888     88888b.d88888 888      
// 8888888888     888     888Y88888P888 888      
// 888    888     888     888 Y888P 888 888      
// 888    888     888     888  Y8P  888 888      
// 888    888     888     888   "   888 888      
// 888    888     888     888       888 88888888                            


settings.template.html = ({}) => `
  <button class="settings-button">Settings</button>
  <div class="background">

    <div class="settings-menu-container">
      <close1-></close1->
      <table class="settings-menu">
        <caption class="settings-title">Settings</caption>
		    <tr class="setting questions">
			    <td class="label">Questions</td>
			    <td><input type="number" min="1" max="1000" value="5" class="question-number"></td>
			    <td><input type="range" min="1" max="1000" value="5" class="question-slider"></td>
		    </tr>
		    <tr class="setting answers">
			    <td class="label">Answers</td>
			    <td><input type="number" min="1" max="30" value="9" class="answer-number"></td>
			    <td><input type="range" min="1" max="30" value="9" class="answer-slider"></td>
		    </tr>
		    <tr class="setting correctAnswers">
			    <td class="label">Right Answers</td>
			    <td><input type="number" min="1" max="5" value="5" class="correct-answer-number"></td>
			    <td><input type="range" min="1" max="5" value="5" class="correct-answer-slider"></td>
		    </tr>
        <tr class="setting next-question">
			    <td class="label">Feedback Time</td>
			    <td><input type="number" min="0" max="2000" value="600" class="next-question-delay-number"></td>
			    <td><input type="range" min="0" max="2000" value="600" class="next-question-delay-slider"></td>
		    </tr>
        <tr class="setting app-height">
			    <td class="label">App Height</td>
			    <td><input type="number" min="0" max="30" value="15" class="app-height-number"></td>
			    <td><input type="range" min="0" max="30" value="15" class="app-height-slider"></td>
		    </tr>
      </table>


      <div class="social-media">
        <librapay-></librapay->
        <youtube-></youtube->
        <bili-bili></bili-bili>
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


settings.template.css = ({
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
  settingsButton = {
    boxModel: {
      content: { width: '8rem', height: '8rem' },
      padding: { all: '0' }
    }
  },
  settingsMenuContainer = {
    background: { color: '#0009' }
  },
  settingsMenu = {
    background: { color: 'white' },
    boxModel: {
      padding: { all: '2rem' },
    },
  },
}) => `
  <style>
    .settings-button {
      ${all.position2}
      ${boxModel.padding(settingsButton.boxModel.padding)}
      ${boxModel.content(settingsButton.boxModel.content)}
    }
    .settings-menu-container {
      ${background(settingsMenu.background)}
      ${boxModel.content({ width: 'max-content' })}
      ${boxModel.padding(settingsMenu.boxModel.padding)}
      ${all.position1('relative')}
    }
    .settings-title {
      padding-bottom: 2rem;
      font-size: 4rem;
    }
    .background {
      visibility: hidden;
      ${all.position1('absolute')}
      ${boxModel.content({ width: '100vw', height: '100vh' })}
      ${background(settingsMenuContainer.background)}
      z-index: 1;
    }
    td {
      height: 100%;
      font-size: 1.5rem;
      margin-top: 1rem;
      margin-bottom: 1rem;
      vertical-align: middle;
    }

    .label { padding-right: 2rem; }
    [type="number"] { margin-right: 1rem; }
		[type="number"] { width: 60px; }
		[type="range"] { width: 100px; }
    .social-media {
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding-top: 2rem;
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


settings.innerHTML = settings.template.css({}) + settings.template.html({})
customElements.define('settings-',
  class extends HTMLElement {
    constructor() {
      super()
      
      this
        .attachShadow({mode: 'open'})
        .appendChild(settings.content.cloneNode(true))

      const close1 = $(this)('close1-')

      const [ questionCount, answerCount, correctAnswer, nextQuestionDelay, appHeight ] = 
        $(this)('.settings-menu')
          .children[1]
          .children
          .values()
          .map(a => a.children.values())
          .map(a => 
            a.map(
              (a,b) => b === 0 ? 
              a.parentNode.className.split(' ')[1].split('-').map((a,b) => b > 0 ? a.letterUp(0) : a).join('') : 
              a.children[0] 
            )
              .toObject({ props: ['name', 'number', 'slider',]})
          )
          .map(({name, number, slider}) => {
				    slider.addEventListener('input', () => 
              number.value = slider.value, 
              globalData.limit[name] = number.value
            )
				    number.addEventListener('keypress', e => 
              !!e.key.match(/[0-9]/) ? 
              null : 
              e.preventDefault()
            )
				    number.addEventListener('keydown', e => 
              e.keyCode === 13 && number.value === '' ? 
              (number.value = number.min, globalData.limit[name] = number.value) : 
              globalData.limit[name] = number.value
            )
            number.addEventListener('keydown', function (e) {if (e.keyCode === 13) this.blur()} )
				    number.addEventListener('input', () => {
					    if (parseInt(number.value) > parseInt(number.max)) {
						    number.value = number.max
						    slider.value = number.max
                globalData.limit[name] = number.value
					    }
					    else if (number.value === '') 
                slider.value = slider.min, 
                globalData.limit[name] = number.value
					    else 
                slider.value = number.value, 
                globalData.limit[name] = number.value
				    })

				    ;[slider, number]
					    .forEach(a => {
                a.addEventListener('blur', () => 
                  number.value === '0' ? 
                  (number.value = number.min, globalData.limit[name] = number.value) : 
                  globalData.limit[name] = number.value
                )
                a.addEventListener('input', () => { 
                  localStorage.setItem(name, a.value)
                  globalData.limit[name] = number.value
                })
					    })

            window.addEventListener('load', () => {
              if (localStorage.getItem(name) !== null) {
                slider.value = localStorage.getItem(name)
                number.value = localStorage.getItem(name)
                globalData.limit[name] = localStorage.getItem(name)
              }
            })
				    globalData.limit[name] = number.value
            return {number, slider}
			    })

      // App Height Settings
      const appHeightStore = !!localStorage.getItem('appHeight') ? localStorage.getItem('appHeight').parseInt() : ''
      if (appHeightStore !== '') {
        globalData.elements.packs.style.height = appHeightStore + 70 + 'vh'
        if (!!globalData.elements.decks) globalData.elements.packs.style.height = appHeightStore + 70 + 'vh'
      }
      appHeight.map(a => {
        a[1].addEventListener('input', () => {
          if (!!globalData.elements.decks) globalData.elements.decks.style.height = a[1].value.parseInt() + 70 + 'vh'
          globalData.elements.packs.style.height = a[1].value.parseInt() + 70 + 'vh'
          globalData.limit.appHeight = a[1].value.parseInt()
        })
      })

      const settingsMenu = $(this)('.background')
      const settingsButton = $(this)('.settings-button')


      let outsideClicked = false
      settingsMenu.addEventListener("mouseup", function (e) {
        if (outsideClicked && this == e.target) this.style.visibility = 'hidden'
        outsideClicked = false
      })

      settingsMenu.addEventListener("mousedown", function (e) {
        if (this == e.target) outsideClicked = true
      })

      close1.addEventListener('click', () => {
        settingsMenu.style.visibility = 'hidden'
      })


      settingsButton.addEventListener("click", () => settingsMenu.style.visibility = 'visible')

      globalData.elements.settings = this

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
	<settings-></settings->
*/ 

