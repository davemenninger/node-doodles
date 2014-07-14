var fs = require('fs');
var emoji = require( 'emoji' );
var emojis = Object.keys( emoji.EMOJI_MAP );


var my_map = new Array();

for ( var i = 0; i < emojis.length; i++ )
{
  var e = emojis[i] + '';
  var name = emoji.EMOJI_MAP[emojis[i]][1]
  my_map[name] = e;
}

var emoji_names = Object.keys( my_map );

var story_file = __dirname + '/../texts/emojitestfile.txt';

fs.readFile( story_file, 'utf8', function (err, data) {
  if (err) {
    console.log( 'Error: ' + err);
  }

  var regex = /\s+/gi;
  var sentences = data.trim().replace(regex, ' ').split('.');
  var ignoreWords = [ 'a', 'de', 'it', 'us' ];

  for ( i = 0; i < sentences.length; i++) {
    var sentence = sentences[i].trim()+'.';
    var hits = 0;

    for ( j = 0; j < emoji_names.length; j++ ){
      if ( ignoreWords.indexOf( emoji_names[j] ) < 0 ){
        //var re = new RegExp( ' '+emoji_names[j]+' ' );
        var re = new RegExp( '["| |-]+'+emoji_names[j]+'["| |,|;|.]{1,2}', "gi" );
        if( sentence.match( re ) ){
          var re2 = new RegExp( emoji_names[j], "gi" );
          sentence = sentence.replace( re2, my_map[emoji_names[j]] );
          hits++;
        }
      }
    }
    if ( hits > 0 ){
      console.log( sentence );
    }
  }
});
    
    
