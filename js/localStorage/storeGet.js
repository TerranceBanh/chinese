'use strict'
// storeGet('prop1') // Gets localStorage of property's value
// storeGet('prop1,prop2.prop3') // Gets localStorage of nested objects' property's value
// storeGet('array.1') // Gets localStorage of array's iteration value
// storeGet('array.1.2.3') // Gets localStorage of nested arrays' iteration value
const storeGet = (props) => {
  props = props.split('.') // Splits into array
  if (!localStorage[props[0]]) return 
  let value = JSON.parse(localStorage[props[0]]) // Converts string into arrays and objects
  for(let i = 1, len = props.length; i < len; i++) value = value[props[i]] // Find's the value based on the "props" value
  return value // Returns value
}

