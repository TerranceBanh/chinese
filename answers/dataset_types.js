'use strict'
const customizableQuestions = [
  {
    question: { question: 'Question #1', tags: ['Tag 1', 'Tag 2', 'Tag 3'] },
    answer: { answers: 'Answer', tags: ['Tag 1', 'Tag 2', 'Tag 3'], wrongs: ['Wrong 1', 'Wrong 2', 'Wrong 3', ] },
  },
  {
    question: { question: 'Question #2', tags: ['Tag 1', 'Tag 2', 'Tag 3'] },
    answer: { answers: ['Answer #1', 'Answer #2'], tags: [['Tag 1', 'Tag 2', 'Tag 3'], ['Tag 1', 'Tag 2', 'Tag 3']], wrongs: ['Wrong 1', 'Wrong 2', 'Wrong 3', ] },
  },
  {
    question: { question: 'Question #3', tags: ['Tag 1', 'Tag 2', 'Tag 3'] },
    answer: { answers: 'Answer', tags: ['Tag 1', 'Tag 2', 'Tag 3'], wrongs: ['Wrong 1', 'Wrong 2', 'Wrong 3', ] },
  },
]

// Tags will be used to indicate which questions can be used as incorrect answers
// Have multiple answers
// Tags per answer
// Add Dedicated Wrong Answers
// Good for: Fill-in-the-blank, 


const matchAnswers = [
  { a: '1', b: '2', c: '3' },
  { a: '4', b: '5', c: '6' },
  { a: '7', b: '8', c: '9' },
]

// Each object doubles as questions and answers
// Every other value within this array will be treated as wrong answers
// Good for: Multiple Choice, Multiple Answers, Match

// Custom Wrong Answers
// Tag Based Wrong Answers
// Closest Matching Wrong Answers
// Randomized Wrong Answers
// Percentage Matched Words To difficulty adjustable


