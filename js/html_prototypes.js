'use strict'
// UPDATE AS OF MARCH 21 2021 6:30PM

const getCSS = ({ element, prop }) => 
	window.getComputedStyle(element).getPropertyValue(prop)

// const setCSS = ({ element, prop }) =>
// 
const getShadowCSS = ({ element, selector }) =>
  Object.values(element.shadowRoot.styleSheets[0].cssRules).filter(a => a.cssText.includes(selector))[0]

const getShadowVar = ({ element, selector, }) =>
	
Object.values(getShadowCSS({ element: this, selector: ':host' }))[0]

Object.declares = (object, props) => {
  const [keys, values] = [Object.keys(props), Object.values(props)]
  for (let i = 0, len = keys.length; i < len; i++) object[keys[i]] = values[i]
  return object
}

Object.prototype.declares = function (props) {
  const [keys, values] = [Object.keys(props), Object.values(props)]
  for (let i = 0, len = keys.length; i < len; i++) this[keys[i]] = values[i]
  return this
}


// $('CSS SELECTOR' || <CREATE ELEMENT> || "'CREATE TEXT NODE'" || ELEMENT || this/*SHADOW ELEMENT*/, { attribute: value }) ('SHADOW CSS SELECTOR')
const $ = (a, attributes) => {
  let tag, query, html, textNode
  const tagMatch = (a) => a.match(/<[A-z0-9-]+>/gi)
  const textMatch = (a) => a.match(/>.+</gi)
  const textNodeMatch = (a) =>  a.match(/[`"'].+['"`]/gi)

  // Extract tag name
  if (typeof a === 'string')
  !!tagMatch(a) ? tag = tagMatch(a).toString().replace(/[<>]/gi, '') : null


  if (typeof a === 'string')
    !!textNodeMatch(a) ? textNode = document.createTextNode(textNodeMatch(a).toString().replace(/["'`]/gi, '')) : null 	

  // Extract search term
  if (typeof a === 'string' && !tagMatch(a) && !textNodeMatch(a)) {
    document.querySelectorAll(a).length > 1 ? query =  document.querySelectorAll(a) :
    !!document.querySelector(a) ? query = document.querySelector(a) :
    null
  }
  // Checks if element
  a instanceof HTMLElement ? html = a : null

  // Exit function if inappropriate value
  if (!tag && !query && !html && !textNode) return

  // Create Element
  else if (!!tag) {
    // Extract text
    const text = !!textMatch(a) ? document.createTextNode(textMatch(a).toString().replace(/[><]/gi, '')) : null

    // Create element
    const element = tag ? document.createElement(tag) : null

    // Append text to element
    !!text ? element.appendChild(text) : null

    // Sets provided attribute values
    !!attributes ? Object.declares(element, attributes) : null

    return element
  }

  else if (!!textNode) {
  	return textNode
  }

  // Query Element
  else if (!!query) {
    return query	
  }

  // Query Shadow element
  else if (!!html && !!html.tagName.includes('-') ) {
  	return (str, num) => {
  	  let query
  	  if (html.shadowRoot.querySelectorAll(str).length > 1) {
  	    !!num && !!attributes ?
  	  	query = Object.declares(html.shadowRoot.querySelectorAll(str)[num], attributes) :
  	  	query = html.shadowRoot.querySelectorAll(str)
  	  }
  	  else {
  	    !!attributes ? 
  	    query = Object.declares(html.shadowRoot.querySelector(str), attributes) : 
  	    query = html.shadowRoot.querySelector(str)
  	  }
  	  return query
  	}
  }
  // Change exisiting element
  else if (!!html && !!attributes) {
    return Object.declares(html, attributes)
  }
  
}

/*
appendElements({
  e : ELEMENT, c: [
	{e : ELEMENT, c: [
		
	]},
	{e : ELEMENT,c: [
		
	]},
  ]
})
*/
const appendElements = ({ e, c }) => {
  for (let i = 0, len = c.length; i < len; i++) {
  	e.appendChild(!!c[i].e ? c[i].e : c[i]) // Append Child
  	!!c[i].c ? appendElements(c[i]) : null // If current child has children recursion
  }
}

/*
prependElements({
  e : ELEMENT, c: [
	{e : ELEMENT, c: [
		
	]},
	{e : ELEMENT,c: [
		
	]},
  ]
})
*/
const prependElements = ({ e, c }) => {
  for (let i = 0, len = c.length; i < len; i++) {
  	e.prepend(!!c[i].e ? c[i].e : c[i]) // prepend Child
  	!!c[i].c ? prependElements(c[i]) : null // If current child has children recursion
  }
}
