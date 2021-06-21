'use strict'
HTMLElement.prototype.computedStyle = function(style) {
  return !!style ? window.getComputedStyle(this)[style] : window.getComputedStyle(this)
}
