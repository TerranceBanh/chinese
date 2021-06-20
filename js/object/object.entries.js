'use strict'
Object.prototype.entries = function(n) {
  return !!n || n === 0 ? Object.entries(this)[n] : Object.entries(this)
}

