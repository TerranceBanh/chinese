const globalData = {
  locale: {},
	limit: {
		questions: 0,
		answers: 0,
		correctAnswers: 0,
    delay: 500,
    appHeight: '',
	},
	current: 0,
	answersData: [], // Server will send question and answers set to here on deck of choice
  decksData: [], // Server will send decks to here on page load
  chosenDeck: '',
  packsData: ['Chinese', 'Japanese', '英文'],
  chosenPack: '',
	cards: [],
  elements: {
    inputs: [],
    submit: '',
    question: '',
    correct: correctSound,
    incorrect: incorrectSound,
    card: '',
    decks: '',
    settings: '',
    stats: '',
  },
	total: {
		right: 0,
		wrong: 0,
	},
	score: {
		right: 0,
    miss: 0,
		wrong: 0,
    overview: [],
	},
	color: {
    bg: 'Khaki',
    select: '#DDE',
    deselect: '#FFF',
		right1: '#090',
		right2: '#AFA',
		wrong1: '#C00',
		wrong2: '#FCC',
		miss1: '#D90',
		miss2: '#FFA',
	},
	
}

const globalMethods = {

  newInputColor: (
    element,
    item, // checkbox OR background
    value
  ) => {
    const input = element.shadowRoot
    const styleTo = (element, prop, value) => element.style[prop] = value
    const container = input.querySelector('.container')
    const label = input.querySelector('.label')
    const box = input.querySelector('.box')

    if (item === 'background') {
      styleTo(container, 'transition', 'background 150ms, border-color 150ms')
      styleTo(label, 'transition', 'background 150ms')
      styleTo(container, 'borderColor', value)
      styleTo(container, 'background', value)
      styleTo(label, 'background', value)
    }
    if (item === 'checkbox') {
      styleTo(input.querySelector('.x1'), 'background', value)
      styleTo(input.querySelector('.x2'), 'background', value)
      styleTo(input.querySelector('.miss'), 'background', value)
      styleTo(input.querySelector('.right'), 'borderColor', value)
      styleTo(box, 'borderColor', value)
    }
  },

  newSubmitColor: (color) => {
    const submit = globalData.elements.submit.shadowRoot.querySelector('.button')
    const question = globalData.elements.question.shadowRoot.querySelector('.container')
    const styleTo = (element, prop, value) => element.style[prop] = value
    styleTo(submit, 'transition', 'all 150ms')
    styleTo(submit, 'background', color)
    styleTo(question, 'transition', 'all 150ms')
    styleTo(question, 'background', color)
    setTimeout(() => styleTo(submit, 'background', globalData.color.bg), globalData.delay) 
    setTimeout(() => styleTo(question, 'background', globalData.color.bg), globalData.delay) 
  },

}

{// Preload Audio START
//  const correct = new Audio('./correct.wav')
//  const incorrect = new Audio('./incorrect.wav')
//  ;[correct, incorrect].map(a => {
//    a.volume = 0
//    a.play()
//    a.volume = 1    
//  })
}// Preload Audio END

