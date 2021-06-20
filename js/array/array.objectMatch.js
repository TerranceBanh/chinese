'use strict'
Array.prototype.objectMatch = function(obj) {
  let array = []
  const keys = Object.keys(obj)

  // Finds key/value pair matches and stores as true or false
  for (let i = 0, arr1 = [], len = this.length; i < len; i++) {
    for (let j = 0, arr2 = [], len = keys.length; j < len; j++) {
      arr2.push(this[i][keys[j]] === obj[keys[j]])
      if (j >= len - 1) arr1[i] = arr2
    }
    if (i >= len - 1) array = arr1
  }
  
  // Converts nested arrays in "array" to fractions (THIS DESCRIPTION IS FOR LATER FEATURES)
  // Converts nested arrays in "array" to decimal numbers
  array = array.map(a => {
    let count = 0
    for (let i = 0, len = a.length; i < len; i++) {
      if (a[i]) count++
    }
    return count / a.length
//    return `${count}/${a.length}`
  })
  
  // Removes greatest matching array element
  for (let i = 0, n = 0, len = array.length; i < len; i++) {
    if (array[n] < array[i]) n = i
    if (i >= len - 1) array = this.filter((a,b,c) => b !== n)
  }

  return array
}

// PROTOTYPES
// remove
// extract
// then
