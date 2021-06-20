'use strict'
const deckGen = (data) => {

  let questions = data
    .map(a => a.values())
    .flat()
  let rights = []

  globalData.limit.questions <= questions.length ? null : globalData.limit.questions = questions.length


  // Random Questions & Rights START
  for (let i = 0, arr = [], data1 = [...data], data2 = [...data], len = globalData.limit.questions; arr.length < len; i++) {
    // OBJECTS DO NOT LIKE NULL AS CHANGES BEHAVE LIKE REFERENCED DATA
    const n1 = Math.floor(Math.random() * data1.length) // Random number on 1st data dimension
    const n2 = Math.floor(Math.random() * data1[n1].values().length) // Random number on 2nd data dimension
    const key = data1[n1].keys(n2) // 2nd dimension property key 
    const value = data1[n1].values(n2) // 2nd dimension property value

    rights.push(data2[n1]) // Store relevant right answers

    arr.push(Object.defineProperty({}, key, {
      enumerable: true,
      configurable: true,
      writable: true,
      value
    })) // Store picked question

    // Remove "data2" current object to align with "data1"'s array elements
    const oneProp = data1[n1].values().length === 1 
    if (oneProp) {// Does "data2"'s current object have one property?
      data2 = data2 // Remove "data2"'s current object
        .objectMatch(data1[n1])
    }
    // Remove Current Key/Value Pair
    data1[n1] = data1[n1] // Filter away question from data set
      .filter(a => a[0] !== key || a[1] !== value)

    // Remove Empty Objects from "data1"
    const noProps = data1[n1].values().length === 0 
    if (noProps) {// Does "data1"'s current object have any properties?
      data1 = data1 // Remove "data1"'s current object
        .filter(a => a.values().length !== 0)
    }

    if (arr.length >= len) questions = arr

    // Infinite loop safe guard
    if (i > len + 100) { // iterator more than max + 100
      console.log('Fail Safe Activated')
      console.log(i, len)
      break
    }

  }// Random Questions & Rights END

  for (let i = 0, len = questions.length; i < len; i++) {
	  cardGen({
		  answers: data,
      rights: rights[i],
		  question: questions[i],
		  limit: globalData.limit.answers
	  })
  }
}

//deckGen(answers.numbers)


