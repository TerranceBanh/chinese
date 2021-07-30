'use strict'
Array.prototype.toObject = function({ props, values }) {
  const obj = {}
  for (let i = 0, len = this.length; i < len; i++) {
    !!props ? 
    Object.defineProperty(obj, props[i], { value: this[i] }) :
    Object.defineProperty(obj, this[i], { value: values[i] })
  }
  return obj
}
