// ██████   ██████  ██ ██      ███████ ██████  ██████  ██       █████  ████████ ███████
// ██   ██ ██    ██ ██ ██      ██      ██   ██ ██   ██ ██      ██   ██    ██    ██     
// ██████  ██    ██ ██ ██      █████   ██████  ██████  ██      ███████    ██    █████  
// ██   ██ ██    ██ ██ ██      ██      ██   ██ ██      ██      ██   ██    ██    ██     
// ██████   ██████  ██ ███████ ███████ ██   ██ ██      ███████ ██   ██    ██    ███████


const boilerplate  = `
  *{
    padding: 0;
    margin: 0;
    border: 0;
    outline: none;
    font-family: Arial;
  }
`.trim()



// ██████   █████   ██████ ██   ██  ██████  ██████   ██████  ██    ██ ███    ██ ██████ 
// ██   ██ ██   ██ ██      ██  ██  ██       ██   ██ ██    ██ ██    ██ ████   ██ ██   ██
// ██████  ███████ ██      █████   ██   ███ ██████  ██    ██ ██    ██ ██ ██  ██ ██   ██
// ██   ██ ██   ██ ██      ██  ██  ██    ██ ██   ██ ██    ██ ██    ██ ██  ██ ██ ██   ██
// ██████  ██   ██  ██████ ██   ██  ██████  ██   ██  ██████   ██████  ██   ████ ██████ 

                                                                                     
// background({ blend: '', image: '', position: { x, y, all }, size: { x, y, all }, repeat: '', origin: '', clip: '', attachment: '', color: '' })
const background = ({ blend, image, position, size, repeat, origin, clip, attachment, color }) => `
  ${!!blend ? `background-blend-mode: ${blend};` : ''}
  ${
    [blend, image, position, size, repeat, origin, clip, attachment, color].every(a => !!a) ? 
    `background: ${image} ${!!position.x ? position.x : 0} ${!!position.y ? position.y : 0} / ${!!size.x ? size.x : 0} ${!!size.y ? size.y : 0} ${repeat} ${origin} ${clip} ${attachment} ${color};`:
    `
      ${!!image ? `background-image: ${image};`: ''}
      ${
        !!position ?
          !!position.all ? `background-position: ${position.all};`:
          !!position.x || !!position.y ? `background-position: ${!!position.x ? position.x : 0} ${!!position.y ? position.y : 0};`:
          '' :
        ''
      }
      ${
        !!size ?
          !!size.all ? `background-size: ${size.all};`:
          !!size.x || !!size.y ? `background-size: ${!!size.x ? size.x : 0} ${!!size.y ? size.y : 0};`:
          '':
        ''
      } 
      ${!!repeat ? `background-repeat: ${repeat};`: ''} 
      ${!!origin ? `background-origin: ${origin};`: ''} 
      ${!!clip ? `background-clip: ${clip};`: ''} 
      ${!!attachment ? `background-attachment: ${attachment};`: ''} 
      ${!!color ? `background-color: ${color};`: ''} 
    `

  }
`.trim()




const boxModel = {}

//  ██████  ██████  ███    ██ ████████ ███████ ███    ██ ████████ 
// ██      ██    ██ ████   ██    ██    ██      ████   ██    ██    
// ██      ██    ██ ██ ██  ██    ██    █████   ██ ██  ██    ██    
// ██      ██    ██ ██  ██ ██    ██    ██      ██  ██ ██    ██    
//  ██████  ██████  ██   ████    ██    ███████ ██   ████    ██    

// boxModel.content({ width, height, minWidth, minHeight, maxWidth, maxHeight })
boxModel.content = ({ width, height, minWidth, minHeight, maxWidth, maxHeight }) => `
  ${!!minWidth ? `min-width: ${minWidth};` : ''}
  ${!!minHeight ? `min-height: ${minHeight};` : ''}

  ${!!width ? `width: ${width};` : ''}
  ${!!height ? `height: ${height};` : ''}
  
  ${!!maxWidth ? `max-width: ${maxWidth};` : ''}
  ${!!maxHeight ? `max-height: ${maxHeight};` : ''}
`.trim()



// ██████   █████  ██████  ██████  ██ ███    ██  ██████  
// ██   ██ ██   ██ ██   ██ ██   ██ ██ ████   ██ ██       
// ██████  ███████ ██   ██ ██   ██ ██ ██ ██  ██ ██   ███ 
// ██      ██   ██ ██   ██ ██   ██ ██ ██  ██ ██ ██    ██ 
// ██      ██   ██ ██████  ██████  ██ ██   ████  ██████  

// boxModel.pad({ t: '', r: '', b: '', l: '', tb: '', lr: '', bt: '', rl: '', all: '' })
boxModel.padding = ({ t, r, b, l, tb, lr, bt, rl, all }) => `${
  // Checks for a value in all and if true then applies padding
  !!all ? `padding: ${all};` :
  
  // Checks any combination of top/bottom left/right values (tb, lr, bt, rl) are true then applies padding
  [tb, lr, bt, rl].some(a => !!a) ? `padding: ${!!tb ? tb : bt ? bt : 0} ${lr ? lr : rl ? rl : 0};` :

  // Checks for a value in t, r, b, l varibales and if ANY is true then applies padding
  [t, r, b, l].some(a => !!a) ? `padding: ${!!t ? t : 0} ${!!r ? r : 0} ${!!b ? b : 0} ${!!l ? l : 0};` :
  ''
}`.trim()




// ██████   ██████  ██████  ██████  ███████ ██████  
// ██   ██ ██    ██ ██   ██ ██   ██ ██      ██   ██ 
// ██████  ██    ██ ██████  ██   ██ █████   ██████  
// ██   ██ ██    ██ ██   ██ ██   ██ ██      ██   ██ 
// ██████   ██████  ██   ██ ██████  ███████ ██   ██ 

/*
  boxModel.border ({
    t: { color: '', style: '', width: '' }, 
    r: { color: '', style: '', width: '' }, 
    b: { color: '', style: '', width: '' }, 
    l: { color: '', style: '', width: '' },
    all: { color: '', style: '', width: '' },
    radius: {
      tl: { t: '', l: '' },
      tr: { t: '', r: '' },
      br: { b: '', r: '' },
      bl: { b: '', l: '' },
      tlbr: '',
      bltr: '',
      all: '',
    },
  })
*/

boxModel.border = ({ // DYNAMICALLY USE PARAMETERS
  t = { color: '', style: '', width: '' }, 
  r = { color: '', style: '', width: '' }, 
  b = { color: '', style: '', width: '' }, 
  l = { color: '', style: '', width: '' },
  all = { color: '', style: '', width: '' },
  radius = { // REQUIRE SOME AND FILL THE REST WITH with 0
    tl: { t: '', l: '' },
    tr: { t: '', r: '' },
    br: { b: '', r: '' },
    bl: { b: '', l: '' },
    tlbr: '',
    bltr: '',
    all: '',
  },
}) => `
  ${
    !!all.width && all.style ? `border: ${all.width} ${!!all.color ? all.color : ''} ${all.style};` : 
    [t,r,b,l].map((a,b) => !!a.width && !!a.style ? `border-${['top', 'right', 'bottom', 'left'][b]}: ${a.width} ${!!a.color ? a.color : ''} ${a.style};` : '').join('')
  }
  ${!!radius.all ? `border-radius: ${radius.all};` : ''}
  ${!!radius.tlbr && !!radius.bltr ? `border-radius: ${radius.tlbr} ${radius.bltr};` : ''}
  ${!![radius.tl, radius.tr,  radius.br,  radius.bl].every(a => !!a && typeof a !== 'object' ) ? `border-radius: ${radius.tl} ${radius.tr} ${radius.br} ${radius.bl};` : ''}
  ${
    !![radius.tl, radius.tr, radius.br, radius.bl].every(a => typeof a === 'object' && Object.values(a).every(a => !!a)) ? 
    `border-radius: ${radius.tl.t} ${radius.tr.t} ${radius.br.b} ${radius.bl.b} /  ${radius.tl.l} ${radius.tr.r} ${radius.br.r} ${radius.bl.l};` 
    : ''
  }
`.trim()





// ███    ███  █████  ██████   ██████  ██ ███    ██ 
// ████  ████ ██   ██ ██   ██ ██       ██ ████   ██ 
// ██ ████ ██ ███████ ██████  ██   ███ ██ ██ ██  ██ 
// ██  ██  ██ ██   ██ ██   ██ ██    ██ ██ ██  ██ ██ 
// ██      ██ ██   ██ ██   ██  ██████  ██ ██   ████ 


// boxModel.margin({ t: '', r: '', b: '', l: '', tb: '', lr: '', bt: '', rl: '', all: '' })
boxModel.margin = ({ t, r, b, l, tb, lr, bt, rl, all }) => `${
  // Checks for a value in all and if true then applies margin
  !!all ? `margin: ${all};` :
  
  // Checks any combination of top/bottom left/right values (tb, lr, bt, rl) are true then applies margin
  [tb, lr, bt, rl].some(a => !!a) ? `margin: ${!!tb ? tb : bt ? bt : 0} ${lr ? lr : rl ? rl : 0};` :

  // Checks for a value in t, r, b, l varibales and if ALL is true then applies margin
  [t, r, b, l].some(a => !!a) ? `margin: ${!!t ? t : 0} ${!!r ? r : 0} ${!!b ? b : 0} ${!!l ? l : 0};` :
  ''
}`.trim()



// ███████  ██████  ███    ██ ████████ 
// ██      ██    ██ ████   ██    ██    
// █████   ██    ██ ██ ██  ██    ██    
// ██      ██    ██ ██  ██ ██    ██    
// ██       ██████  ██   ████    ██    

// font ({ style: '', weight: '', size: '', family: '', decoration: '', align: '', space: { word: '', letter: '' } })
const font = ({ style, weight, size, family, decoration, align, color, spacing }) => `
  ${!!style ? `font-style: ${style};` : ''}
  ${!!weight ? `font-weight: ${weight};` : ''}
  ${!!size ? `font-size: ${size};` : ''}
  ${!!family ? `font-family: ${family};` : ''}
  ${!!decoration ? `text-decoration: ${decoration};` : ''}
  ${!!align ? `text-align: ${align};` : ''}
  ${!!color ? `color: ${color};` : ''}
  ${!!spacing ? (({ word, letter }) => `
	  ${!!word ? `word-spacing: ${word};` : ''}
	  ${!!letter ? `letting-spacing: ${letter};` : ''}
  `)(spacing) : ''}
`.trim()
// use @font-face to create consistent fonts across browsers



// ███████ ██      ███████ ██   ██
// ██      ██      ██       ██ ██ 
// █████   ██      █████     ███  
// ██      ██      ██       ██ ██ 
// ██      ███████ ███████ ██   ██
                                
                  
// flex({ justify: '', align: '', basis: '', direction: '', grow: '', shrink: '', wrap: '', gap: { x: '', y: '', all: '' }, display: '' })
const flex = ({ justify, align, basis, direction, grow, shrink, wrap, gap = {}, display }) => `
  display: ${!!display ? display: 'flex'};
  ${!!justify ? `justify-content: ${justify};` : ''}
  ${!!align ? `align-items: ${align};` : ''}
  ${
    [direction, wrap].every(a => !!a) ? `flex-flow: ${direction} ${flow};` : 
    `
      ${!!direction ? `flex-direction: ${direction};` : ''}
      ${!!wrap ? `flex-wrap: ${wrap};` : ''}
    `
  }
  ${
    [grow, shrink, basis].every(a => !!a) ? `flex: ${grow} ${shrink} ${basis};` :
    `
      ${!!grow ? `flex-grow: ${grow};` : ''}
      ${!!shrink ? `flex-shrink: ${shrink};` : ''}
      ${!!basis ? `flex-basis: ${basis};` : ''}
    `
  }
  ${
    !!gap.all ? `gap: ${gap.all};` :
    !![gap.x, gap.y].some(a => !!a) ? `gap: ${!!gap.x ? gap.x : 0} ${!!gap.y ? gap.y : 0};` : 
    ''
  }
`.trim()



//  ██████  ██████  ██ ██████
// ██       ██   ██ ██ ██   ██
// ██   ███ ██████  ██ ██   ██
// ██    ██ ██   ██ ██ ██   ██
//  ██████  ██   ██ ██ ██████
                            
const grid = {}

// grid.gap({ x: '', y: '', all: '' })
grid.gap = ({ x, y, all }) => `${
  !!all ? `gap: ${all};` :
  !![x,y].some(a => !!a) ? `gap: ${!!x ? x : 0} ${!!y ? y : 0};`:
  ''
}`.trim()

// grid.template('DISPLAY', { areas, height }, { areas, height }, { areas, height }, 'WIDTH1, WIDTH2, WIDTH3')
grid.template = function (display = 'grid') { // Uses function reserved keyword to access the arguments reserved keyword
  // Initial Variable Declaration
  let css = `display: ${display};\ngrid-template: `
  
  // Convert arguments to string in css format (TEMPALTE AREAS + ROW HEIGHT)
  for (let i = 1; i < arguments.length - 1; i++) {
    const {areas, height} = arguments[i]
    css += `\n  '${areas}' ${!!height ? height : ''}`
  }
  
  // Convert last argument to string in css format (COLUMN WIDTH)
  css += `\n  /${arguments[arguments.length - 1]}`
  css += `\n;`
  return css
}

grid.setup = function (selector) { // Uses function reserved keyword to access the arguments reserved keyword
  // Initial Variable Declaration
  const names = []
  let css = `${selector} {\n  display: grid;\n  grid-template: `
  
  // Convert arguments to string in css format (TEMPALTE AREAS + ROW HEIGHT)
  for (let i = 1; i < arguments.length - 1; i++) {
    const {areas, height} = arguments[i]
    css += `\n  '${areas}' ${!!height ? height : ''}`
  }
  
  // Convert last argument to string in css format (COLUMN WIDTH)
  css += `\n    /${arguments[arguments.length - 1]}`
  css += `\n  ;\n}`

  // Filter same names (NAMES ARRAY)
  for (let i = 1; i < arguments.length - 1; i++) 
    arguments[i].areas.split(' ').map(a => 
      !names.includes(a) ? names.push(a) : null
    )
  // Convert names array to string in css format (GRID AREAS)
  for (let i = 0; i < names.length; i++) css += `\n.${names[i]} {grid-area: ${names[i]};}`
  return css
}

// grid.align({ x: { content: '', items: '', self: '' }, y: { content: '', items: '', self: '' } })
grid.align = ({
  x = { content: '', items: '', self: '' },
  y = { content: '', items: '', self: '' },
}) => `
  ${
    [x.content, y.content].every(a => !!a) ? `place-content: ${x.content} ${y.content};` :
    !!x.content ? `justify-content: ${x.content};` :
    !!y.content ? `align-content: ${y.content};` :
    ''
  }
  ${
    [x.items, y.items].every(a => !!a) ? `place-items: ${x.items} ${y.items};` :
    !!x.items ? `justify-items: ${x.items};` :
    !!y.items ? `align-items: ${y.items};` :
    ''
  }
  ${
    [x.self, y.self].every(a => !!a) ? `place-self: ${x.self} ${y.self};` :
    !!x.self ? `justify-self: ${x.self};` :
    !!y.self ? `align-self: ${y.self};` :
    ''
  }
`.trim()



//  ██████  ██████       ██ ███████  ██████ ████████    ████████  ██████          ██ ███████  ██████  ███    ██
// ██    ██ ██   ██      ██ ██      ██         ██          ██    ██    ██         ██ ██      ██    ██ ████   ██
// ██    ██ ██████       ██ █████   ██         ██          ██    ██    ██         ██ ███████ ██    ██ ██ ██  ██
// ██    ██ ██   ██ ██   ██ ██      ██         ██          ██    ██    ██    ██   ██      ██ ██    ██ ██  ██ ██
//  ██████  ██████   █████  ███████  ██████    ██          ██     ██████      █████  ███████  ██████  ██   ████
                                                                                                                                                                                                                              

String.prototype.objToJSON = function () {
  let obj = this.toString()
  const quotedKeys = /[`'].*[`']\s*:/g
  const quotelessKeys = /([\w\d]+\s+=?)*[\w\d]+(?=\s*:)/g
  const strings = /[`'].*[`']/g
  const quotations = /^['`]|['`]$/g
  let keys

  if (this.match(quotedKeys) !== null) {
    keys = [...this.match(quotedKeys)]
    keys.map(a => obj = obj.replace(a, a.replace(/['`]/g, '')))
  }
  
  // Process 1
  let values = [...obj.match(strings)] // Separates all string values from processing
  values.map(a => {
    obj = obj.replace(a, "''")
    return a
  })
  values = values.map(a => a === "''" || a === "``" ? "'#'" : a) // Places hash in between empty quotes

  // Process 2
  keys = [...new Set(obj.match(quotelessKeys))] // Matches all object keys in string that do not include quotes...
  keys.map(a => obj = obj.replace(new RegExp(a, 'g'), `"${a}"`)) // then adds double quotes at start and end of string

  // // DELETE IF EVERYTHING WORKS OKAY!
  // const quotedKeys = /['`].*['`](?=:)/g
  // keys = [...new Set(obj.match(quotedKeys))] // Matches all object keys that inlclude single quotes or back ticks...
  // keys.map(a => obj = obj.replace(a, a.replace(/^['`]|['`]$/g, '"'))) // then replaced with double quotes

  // Process 3
  values.map(a => obj = obj.replace("''", a)) // Adds string values back to respective properties

  // Process 4
  values = [...obj.match(strings)] // Matches all object values that inlclude single or back ticks...
  values.map(a => obj = obj.replace(a, a.replace(quotations, '"'))) // then replaced with double quotes

  // Process 5
  // REMOVE COMMAS AT END OF OBJECT PROPERTY/VALUE LIST

  return JSON.parse(obj)
}

String.prototype.cssToObj = function () {
  return Object.assign(
    ...this
      .replace(/;$/, '') // remove last semi-colon
      .replace(/[\s\n]/gi, '') // remove all spaces and newlines
      .split(';') // split properties pairs
      .map(a => a.split(':')) // split key value pairs
      .map(a => {
        a[0] = `"${a[0]}"` // Make property JSON.parse compatible
        a[1] = `"${a[1]}"` // Make value JSON.parse compatible
        return JSON.parse(`{${a.join(':')}}`) // join array values
      })
  )
}

// CONFLICTS WITH ZEPTO JS SOMEHOW
// Object.prototype.cssToStr = function () {
//   return JSON.stringify(this)
//   .replace(/[{}"]/g, '')
//   .replace(/,/g, ';')
//   + ';'
// }


const hsl = ( h, s, l ) => `hsl(${!!h ? h : 0}, ${!!s ? s : 0}, ${!!l ? l : 0})`


const rgba = ( r, g, b, a ) => `rgba(${!!r ? r : 0}, ${!!g ? g : 0}, ${!!b ? b : 0}, ${!!a ? a : 0})`
