function glitch( s ) {
  
  //remove a letter
  var n = Math.floor( Math.random()*(s.length-1) + 1 );
  s = s.slice(0,n-1)+s.slice(n);

  //add a letter

  //substitute a letter

  //duplicate a letter

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

  //alter capitalization

  //add quotes, periods, commas, etc.

  return s;

}

var sentence = "om mani padme hum";

for ( i = 0; i < 50; i++ ){
  console.log( glitch( sentence ) );
}
