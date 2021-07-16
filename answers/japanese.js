// Have indicators of literal meaning and intended meaning and indicators to differentiate similarities
globalData.locale['Japanese'] = 'hiragana'

window['Japanese'] = {
    'Numbers': [
        { hiragana: 'ゼロ', romaji: 'zero', en: 'zero', audio: 'ゼロ.(🎵)', }, 
        { hiragana: 'いち', romaji: 'ichi', en: 'one', audio: 'いち.(🎵)', }, 
        { hiragana: 'に', romaji: 'ni', en: 'two', audio: 'に.(🎵)', }, 
        { hiragana: 'さん', romaji: 'san', en: 'three', audio: 'さん.(🎵)', },
        { hiragana: 'よん', romaji: 'yon', en: 'four', audio: 'よん.(🎵)', },
        { hiragana: 'ご', romaji: 'go', en: 'five', audio: 'ご.(🎵)', },
        { hiragana: 'ろく', romaji: 'roku', en: 'six', audio: 'ろく.(🎵)', },
        { hiragana: 'なな', romaji: 'nana', en: 'seven', audio: 'なな.(🎵)', },
        { hiragana: 'はち', romaji: 'hachi', en: 'eight', audio: 'はち.(🎵)', },
        { hiragana: 'きゅう', romaji: 'kyuu', en: 'nine', audio: 'きゅう.(🎵)', },
        { hiragana: 'じゅう', romaji: 'jyuu', en: 'ten', audio: 'じゅう.(🎵)', },
        { hiragana: 'ひゃく', romaji: 'hyaku', en: 'hundred', audio: 'ひゃく.(🎵)', },
        { hiragana: 'ろっぴゃく', romaji: 'roppyaku', en: 'six hundred', audio: 'ろっぴゃく.(🎵)', },
        { hiragana: 'はっぴゃく', romaji: 'happyaku', en: 'eight hundred', audio: 'はっぴゃく.(🎵)', },
        { hiragana: 'せん', romaji: 'sen', en: 'thousand', audio: 'せん.(🎵)', },
        { hiragana: 'いっせん', romaji: 'issen', en: 'one thousand', audio: 'いっせん.(🎵)', },
        { hiragana: 'さんぜん', romaji: 'sanzen', en: 'three thousand', audio: 'さんぜん.(🎵)', },
        { hiragana: 'はっせん', romaji: 'hassen', en: 'eight thousand', audio: 'はっせん.(🎵)', },
        { hiragana: 'まん', romaji: 'man', en: 'ten thousand', audio: 'まん.(🎵)', },
        { hiragana: 'おく', romaji: 'oku', en: 'hundred million', audio: 'おく.(🎵)', },
    ],

}

window['Japanese'] = window['Japanese']
  .map(a => 
    a[1].map(a => 
      a.map(a => 
        a[0] === 'audio' ? a[1] = 'audio/japanese/' + a[1] : a[1]
      )
    )
  )
