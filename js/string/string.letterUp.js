'use strict'
// Count starts from array count 1
String.prototype.letterUp = function (n) {
	return this
    .split('')
    .map((a,b) => b === n ? a.toUpperCase() : a)
    .join('')
}
