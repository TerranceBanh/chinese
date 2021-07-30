'use strict'
const answers = window['Chinese']['Pinyin & Zhuyin']
for (let i = 0, len = answers.length; i < len; i++) {
  const audio = $(`<audio->${answers[i]['audio'].replace('.(🎵)', '.mp3')}</audio->`)
  document.body.appendChild(audio)
}
