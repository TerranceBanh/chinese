'use strict'
Object.prototype.keys = function(n) {
  return !!n || n === 0 ? Object.keys(this)[n] : Object.keys(this)
}

