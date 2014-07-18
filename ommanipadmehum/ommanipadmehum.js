var Twit = require('twit');
var T = new Twit({
    consumer_key:         process.env.TWIT_CONSUMER_KEY
  , consumer_secret:      process.env.TWIT_CONSUMER_SECRET
  , access_token:         process.env.TWIT_ACCESS_TOKEN
  , access_token_secret:  process.env.TWIT_ACCESS_TOKEN_SECRET
})

function glitch( s ) {

  var w = Math.floor( Math.random()*6 + 1 );
  var n = Math.floor( Math.random()*(s.length-1) + 1 );
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var c = letters[ Math.floor( Math.random()*letters.length ) ];
  var symbols = "\"\'.,/!#$%^&*()<>?:[]{}_-+=";
  var x = symbols[ Math.floor( Math.random()*symbols.length ) ];
  var digits = "0123456789";
  var d = digits[ Math.floor( Math.random()*digits.length ) ];
  var g;

  switch (w) {
    case 1: 
    //remove a letter
    g = s.slice(0,n-1)+s.slice(n);
    break;

    case 2:
    //add a letter
    g = s.slice(0,n)+c+s.slice(n);
    break;

    case 3:
    //substitute a letter
    g = s.slice(0,n-1)+c+s.slice(n);
    break;

    case 4:
    //duplicate a letter
    g = s.slice(0,n)+s[n]+s.slice(n);
    break;

    case 5: 
    //alter capitalization
    g = s.slice(0,n-1)+s[n-1].toUpperCase()+s.slice(n);
    break;

    case 6:
    //add quotes, periods, commas, etc.
    g = s.slice(0,n)+x+s.slice(n);
    break;
}

  //add emoji

  //subst foreign languages
  // ཨོཾ་མ་ཎི་པདྨེ་ཧཱུྃ
  // 唵嘛呢叭咪吽
  // 唵麼抳缽訥銘吽
  // โอมฺ มณิ ปทฺเม หูมฺ
  // 옴 마니 파드메 훔
  // 옴 마니 반메 훔
  // ᠣᠧᠮ
  // ᠮᠠ
  // ᠨᠢ
  // ᠪᠠᠳ
  // ᠮᠡᠢ
  // ᠬᠤᠩ
  // オーン マニ パドメー フーン
  // オン マニ ペメ フン
  // ஓம் மணி பத்மே ஹூம்
  // ओं मणिपद्मे हूं
  // Ом мани падме хум
  // ওঁ মণিপদ্মে হুঁ
  // ओह्म माने पेमे हु
  // ഓം മണി പദ്മേ ഹും
  // ꡝꡡꡏ ꡏ ꡋꡞ ꡌꡊ ꡏꡠ ꡜꡟꡃ 
  // ༀམཎིཔདྨེཧཱུྃ།
  // 嗆丵喒侠剣儂

  return g;

}


function om() {

   var tweet = glitch( "om mani padme hum" );

   console.log( tweet );

   /*
   T.post('statuses/update', { status: tweet }, function(err, data, response) {
     console.log(data);
     console.log(err);
   });
   */
}

om();

var hours = 0.25;

console.log( "running every " + hours + " hours..." );

// 1000ms * 60s * 60m * N hours
var timerID = setInterval( om, 1000 * 60 * 60  * hours );
