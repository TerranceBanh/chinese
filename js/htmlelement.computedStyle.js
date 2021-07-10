'use strict'
HTMLElement.prototype.computed = function(style) {
  return !!style ? window.getComputedStyle(this)[style] : window.getComputedStyle(this)
}
