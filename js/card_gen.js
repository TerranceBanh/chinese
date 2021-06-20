'use strict'

const cardGen = ({
  answers, // Array of Objects 
  rights, // Object
  question, // Array [PROPERTY, VALUE]
  limit // Number
}) => {

  question = question.entries(0)
  let wrongs = answers
    .objectMatch(rights) // Removes right answers from rest of answers
    .map(a => a.filter(a => a[0] !== question[0])) // Filter category of answers
    .map(a => a.values()) // Converts key/value pairs to values
    .flat() // Converts to 1D array

  rights = rights
    .filter((a) => 
      !(a[0] === question[0] && a[1] === question[1])
    ) // Filters question from right answers
    .values() // Converts key/value pairs to values

  wrongs = wrongs
    .filter(a => !rights.includes(a)) // Removes any answers that are the exact same as the rights

  limit = {
    answers: limit, // Store answers limit
    rights: // Prevents 0 right answers and going beyond available right answers
      rights.length < globalData.limit.correctAnswers ? rights.length :
      globalData.limit.correctAnswers <= 0 ? 1 : 
      globalData.limit.correctAnswers,
  }
  limit.wrongs = // Prevents 0 wrong answers and going beyond available wrong answers
    wrongs.length - limit.rights < globalData.limit.answers ? wrongs.length - limit.rights :
    globalData.limit.answers <= 0 ? 1 : 
    globalData.limit.answers - rights.length


  // Randomly chooses wrong answers
  for (let i = 0, arr = []; 0 <= wrongs.length ; i++) {
    // Random iteration
    const n = Math.floor(Math.random() * wrongs.length) 

    arr.push(wrongs[n])
    wrongs[n] = null
    wrongs = wrongs.filter(a => a !== null)

    if (arr.length >= limit.wrongs + (rights.length - limit.rights)) {
      wrongs = arr
      break
    }
    if (i > wrongs.length + 100) {
      console.log(1,'Fail Safe Activated')
      break
    }
  }

  // Randomly chooses right answers
  for (let i = 0, arr = []; 0 <= rights.length; i++) {
    // Random iteration
    const n = Math.floor(Math.random() * rights.length)

    arr.push(rights[n])
    rights[n] = null
    rights = rights.filter(a => a !== null)

    if (arr.length >= limit.rights) {
      rights = arr
      break
    }
    if (i > rights.length + 100) {
      console.log(1,'Fail Safe Activated')
      break
    }
  }
  
  answers = wrongs.concat(rights).shuffle() // Mix right & wrong answers
  globalData.cards.push({ question: question[1], answers, rights, wrongs }) // Add card to globalData
  globalData.total.right += rights.length // Add right count total to globalData
  globalData.total.wrong += wrongs.length // Add wrong count total to globalData
}
