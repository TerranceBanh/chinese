'use strict'
String.prototype.replaceAll = function (a, b, arr, i, logged = false) {
  let str = this
  const reg = new RegExp(`${a}[^${b}]{1,}${b}`, `g${i ? i : ''}`)
  const matches = this.match(reg)
  for (let i = 0, len = matches.length; i < len; i++) {
    logged ? console.log(i, matches[i], typeof arr === 'string' ? arr : arr[i]) : null 
    str = str
      .replace(
        matches[i],
        typeof arr === 'string' ? arr : arr[i] 
      )
  }
  return str
}
