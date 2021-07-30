'use strict'
// Initial Template Code
const stats = document.createElement('template')
stats.template = {}


// 888    888 88888888888 888b     d888 888      
// 888    888     888     8888b   d8888 888      
// 888    888     888     88888b.d88888 888      
// 8888888888     888     888Y88888P888 888      
// 888    888     888     888 Y888P 888 888      
// 888    888     888     888  Y8P  888 888      
// 888    888     888     888   "   888 888      
// 888    888     888     888       888 88888888                            


stats.template.html = ({}) => `
  <button class="stats-button">Stats</button>
  <div class="stats-list-container1">
    <div class="stats-list-container2">
      <close2-></close2->
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


stats.template.css = ({
  all = {
    position1: (p) => `
      position: ${p};
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `,
    btnBW: '0.5rem',
    btnC1: '#CCC',
    btnC2: '#999',
  },
  settingsMenuContainer = {
    background: { color: '#0009' }
  },
  settingsButton = {
    boxModel: {
      content: { width: '8rem', height: '8rem' },
      padding: { all: '0' }
    }
  },
  settingsMenu = {
    background: { color: 'white' },
    boxModel: {
      padding: { all: '3rem' },
    },
  },
}) => `
  <style>
    .stats-button {
      position: absolute;
      top: 0;
      right: 0;
      ${boxModel.padding(settingsButton.boxModel.padding)}
      ${boxModel.content(settingsButton.boxModel.content)}
    }
    .stats-list-container1 {
      visibility: hidden;
      ${all.position1('absolute')}
      ${boxModel.content({ width: '100vw', height: '100vh' })}
      ${background(settingsMenuContainer.background)}
      z-index: 1;
    }
    .stats-list-container2 {
      ${all.position1('absolute')}
    }
    .stats-title {
      background: white;
      display: table-caption;
      text-align: center;
      color: black;
      margin: 0;
      padding-top: 3rem;
      font-size: 4rem;
    }
    .stats-list {
      display: table;
      ${background(settingsMenu.background)}
      ${boxModel.content({ width: 'max-content' })}
      ${boxModel.padding(settingsMenu.boxModel.padding)}
    }
    .stats-list td {
      font-size: 1.5rem;
      vertical-align: middle;
    }
    label, .stats-list td  {
      padding-right: 1rem;
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


stats.innerHTML = stats.template.css({}) + stats.template.html({})
customElements.define('stats-',
  class extends HTMLElement {
    constructor() {
      super()
      
      this
        .attachShadow({mode: 'open'})
        .appendChild(stats.content.cloneNode(true))


      const statsContainer = $(this)('.stats-list-container1')
      const statsList = $(this)('.stats-list')
      const statsButton = $(this)('.stats-button')
      const close2 = $(this)('close2-')

      let outsideClicked = false

      statsContainer.addEventListener("mouseup", function (e) {
        if (outsideClicked && this == e.target) this.style.visibility = 'hidden'
        outsideClicked = false
      }) 
      statsContainer.addEventListener("mousedown", function (e) {
        if (this == e.target) outsideClicked = true
      })

      close2.addEventListener('click', () => {
        statsContainer.style.visibility = 'hidden'
      })

      statsButton.addEventListener("click", () => statsContainer.style.visibility = 'visible')
      const categoryStats = globalData.decksData
        .map(a => 
          a[1]
            .map(a => a.values().length)
            .reduce((a,b) => a + b)
        )
      const charStat = Array.from(
          new Set(
            globalData.decksData
              .values()
              .flat()
              .map(a => a[globalData.locale[globalData.chosenPack]])
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
            statsList.appendChild(row)
            return a
          })
          .values()
          .map((a) => a[1])
          .reduce((a,b) => a + b)

          appendElements({
            e : statsList, c: [
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
          e : statsList, c: [
            {e : total, c: [{e: text}]},
            {e : number, c: [{e: n}]},
          ]
        })
      }

      globalData.elements.stats = this
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
	<stats-></stats->
*/ 

