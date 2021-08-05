console.log('test')
console.log('serviceWorker' in navigator)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator
      .serviceWorker
      .register('./sw1.js')
      .then(reg => {
        console.log('SW Registered')
        console.log(reg)
      })
      .catch(err => {
        console.log('SW Registration Failed')
        console.log(err)
      })
  })
}
