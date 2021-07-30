// Have indicators of literal meaning and intended meaning and indicators to differentiate similarities


window['英语'] = {
    数字: [
        { cn: '零', en: 'zero', audio: 'zero.(🎵)', },  
        { cn: '一', en: 'one', audio: 'one.(🎵)', }, 
        { cn: '二', en: 'two', audio: 'two.(🎵)', },  
        { cn: '三', en: 'three', audio: 'three.(🎵)', }, 
        { cn: '四', en: 'four', audio: 'four.(🎵)', }, 
        { cn: '五', en: 'five', audio: 'five.(🎵)', }, 
        { cn: '六', en: 'six', audio: 'six.(🎵)', }, 
        { cn: '七', en: 'seven', audio: 'seven.(🎵)', }, 
        { cn: '八', en: 'eight', audio: 'eight.mp3.(🎵)', }, 
        { cn: '九', en: 'nine', audio: 'nine.(🎵)', }, 
        { cn: '十', en: 'ten', audio: 'ten.(🎵)', }, 
        { cn: '一百', en: 'one hundred', audio: 'one hundred.(🎵)', }, 
        { cn: '一千', en: 'one thousand', audio: 'one thousand.(🎵)', }, 
        { cn: '一万', en: 'ten thousand', audio: 'ten thousand.(🎵)', }, 
        { cn: '十万', en: 'one hundred thousand', audio: 'one hundred thousand.(🎵)', }, 
        { cn: '一百万', en: 'one million', audio: 'one million.(🎵)', }, 
        { cn: '一千万', en: 'ten million', audio: 'ten million.(🎵)', }, 
        { cn: '一亿', en: 'hundred million', audio: 'hundred million.(🎵)', }, 
        { cn: '十亿', en: 'one billion', audio: 'one billion.(🎵)', }, 
        { cn: '一百亿', en: 'ten billion', audio: 'ten billion.(🎵)', }, 
        { cn: '一千亿', en: 'one hundred billion', audio: 'one hundred billion.(🎵)', }, 
    ],
    代词: [
        { cn: '我', en: 'me, I', audio: 'me, I.(🎵)', }, 
        { cn: '你，您', en: 'you', audio: 'you.(🎵)', },  
        { cn: '他', en: 'he, him', audio: 'he, him.(🎵)', }, 
        { cn: '她', en: 'she', audio: 'she.(🎵)', }, 
        { cn: '我们', en: 'us', audio: 'us.(🎵)', },   
        { cn: '他们，她们，你们，您们', en: 'them', audio: 'them.(🎵)', }, 
        { cn: '我的', en: 'mine', audio: 'mine.(🎵)', },  
        { cn: '你的，您的', en: 'yours', audio: 'yours.(🎵)', },  
        { cn: '他的', en: 'his', audio: 'his.(🎵)', },  
        { cn: '她的', en: 'her, hers', audio: 'her, hers.(🎵)', },  
        { cn: '我们的', en: 'ours', audio: 'ours.(🎵)', },   
        { cn: '他们的，她们的，你们的，您们的', en: 'theirs', audio: 'theirs.(🎵)', }, 
    ],

}

window['英语'] = window['英语']
  .map(a => 
    a[1].map(a => 
      a.map(a => 
        a[0] === 'audio' ? a[1] = 'audio/英语/' + a[1] : a[1]
      )
    )
  )
