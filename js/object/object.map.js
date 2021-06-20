'use strict'
Object.prototype.map = function(func) {
  const obj = {}
  const values = Object.values(this)
  const keys = Object.keys(this)

  for (let i = 0, len = values.length; i < len; i++)
    obj[keys[i]] = func([keys[i], values[i]], i, this)

  return obj
}

