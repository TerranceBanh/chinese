'use strict'
Object.prototype.filter = function(func) {  
  const obj = {}
  const values = Object.values(this)
  const keys = Object.keys(this)
  for (let i = 0, len = values.length; i < len; i++) {
    func([keys[i], values[i]], i, this) ?
    obj[keys[i]] = values[i] :
    null
  }
  return obj
}
