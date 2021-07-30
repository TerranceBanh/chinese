'use strict'
// storeSet('prop1', 'value') // Sets localStorage of property's value
// storeSet('prop1,prop2.prop3', 'value') // Sets localStorage of nested objects' property's value
// storeSet('array.1', 'value') // Sets localStorage of array's iteration value
// storeSet('array.1.2.3', 'value') // Sets localStorage of nested arrays' iteration value
const storeSet = (props, value) => {
  props = props.split('.') // Splits into array
  let obj1
  if (props.length > 1 && !localStorage[props[0]]) {
    if (props[1][0].match(/[A-z]/) !== null) obj1 = {}
    if (props[1][0].match(/[0-9]/) !== null) obj1 = []
  }
  else if (!!localStorage[props[0]]) obj1 = JSON.parse(localStorage[props[0]])
  const func = (a1,b1 = 0,c1, v1) => { // Recursive Function
    if (b1 >= c1.length) return v1 // Change the accessed property to value
    else {
      if (a1[c1[b1]] === undefined) {
        if (c1[b1 + 1] !== undefined) {
          if (isNaN(c1[b1 + 1].parseInt())) a1[c1[b1]] = {}
          else a1[c1[b1]] = []
        }
      }
      a1[c1[b1]] = func(a1[c1[b1]], ++b1, c1, v1) // Traverse the nested objects and/or nested arrrays
    }
    return a1 // return value
  }
  value = func(obj1, 1, props, value) // Run Recursive Function and store value
  localStorage[props[0]] = JSON.stringify(value) // Store recursive funciton value
  return value // Return recursive function value
}
// Will not change existing Object into Array and Vice Versa
// ADD LOGGING

