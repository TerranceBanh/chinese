'use strict'
Object.prototype.values = function(n) {
  return !!n || n === 0 ? Object.values(this)[n] : Object.values(this)
}

