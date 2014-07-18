function glitch( s ) {
  
  //remove a letter
  var n = Math.floor( Math.random()*(s.length-1) + 1 );
  var g = s.slice(0,n-1)+s.slice(n);

  //add a letter
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var c = letters[ Math.floor( Math.random()*letters.length ) ];
  g = s.slice(0,n)+c+s.slice(n);

  //substitute a letter
  g = s.slice(0,n-1)+c+s.slice(n);

  //duplicate a letter
  g = s.slice(0,n)+s[n]+s.slice(n);

  //alter capitalization
  g = s.slice(0,n-1)+s[n-1].toUpperCase()+s.slice(n);

  //add quotes, periods, commas, etc.
  var symbols = "\"\'.,/!@#$%^&*()<>?:[]{}_-+=";
  var x = symbols[ Math.floor( Math.random()*symbols.length ) ];
  g = s.slice(0,n)+x+s.slice(n);

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

var sentence = "om mani padme hum";

for ( i = 0; i < 50; i++ ){
  console.log( glitch( sentence ) );
}