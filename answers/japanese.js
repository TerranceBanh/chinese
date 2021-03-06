// Have indicators of literal meaning and intended meaning and indicators to differentiate similarities
globalData.locale['Japanese'] = 'hiragana'

window['Japanese'] = {
    'Numbers': [
        { hiragana: 'γΌγ­', romaji: 'zero', en: 'zero', audio: 'γΌγ­.(π΅)', }, 
        { hiragana: 'γγ‘', romaji: 'ichi', en: 'one', audio: 'γγ‘.(π΅)', }, 
        { hiragana: 'γ«', romaji: 'ni', en: 'two', audio: 'γ«.(π΅)', }, 
        { hiragana: 'γγ', romaji: 'san', en: 'three', audio: 'γγ.(π΅)', },
        { hiragana: 'γγ', romaji: 'yon', en: 'four', audio: 'γγ.(π΅)', },
        { hiragana: 'γ', romaji: 'go', en: 'five', audio: 'γ.(π΅)', },
        { hiragana: 'γγ', romaji: 'roku', en: 'six', audio: 'γγ.(π΅)', },
        { hiragana: 'γͺγͺ', romaji: 'nana', en: 'seven', audio: 'γͺγͺ.(π΅)', },
        { hiragana: 'γ―γ‘', romaji: 'hachi', en: 'eight', audio: 'γ―γ‘.(π΅)', },
        { hiragana: 'γγγ', romaji: 'kyuu', en: 'nine', audio: 'γγγ.(π΅)', },
        { hiragana: 'γγγ', romaji: 'jyuu', en: 'ten', audio: 'γγγ.(π΅)', },
        { hiragana: 'γ²γγ', romaji: 'hyaku', en: 'hundred', audio: 'γ²γγ.(π΅)', },
        { hiragana: 'γγ£γ΄γγ', romaji: 'roppyaku', en: 'six hundred', audio: 'γγ£γ΄γγ.(π΅)', },
        { hiragana: 'γ―γ£γ΄γγ', romaji: 'happyaku', en: 'eight hundred', audio: 'γ―γ£γ΄γγ.(π΅)', },
        { hiragana: 'γγ', romaji: 'sen', en: 'thousand', audio: 'γγ.(π΅)', },
        { hiragana: 'γγ£γγ', romaji: 'issen', en: 'one thousand', audio: 'γγ£γγ.(π΅)', },
        { hiragana: 'γγγγ', romaji: 'sanzen', en: 'three thousand', audio: 'γγγγ.(π΅)', },
        { hiragana: 'γ―γ£γγ', romaji: 'hassen', en: 'eight thousand', audio: 'γ―γ£γγ.(π΅)', },
        { hiragana: 'γΎγ', romaji: 'man', en: 'ten thousand', audio: 'γΎγ.(π΅)', },
        { hiragana: 'γγ', romaji: 'oku', en: 'hundred million', audio: 'γγ.(π΅)', },
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
