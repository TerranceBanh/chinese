'use strict'
String.prototype.extract = function (a, b, i) {
  const reg = new RegExp(`${a}[^${b}]{1,}${b}`, `g${i ? i : ''}`)
  return this.match(reg)
}

