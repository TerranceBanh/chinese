'use strict'
Array.prototype.shuffle = function() {
  let array = this
  for (let i = array.length, arr = []; i > 0; i--) {
	  const n = Math.floor(Math.random() * array.length)
    
    arr.push(array[n])
    array[n] = null
    array = array.filter(a => a !== null)

	  if (i === 1) return arr
  }
}
