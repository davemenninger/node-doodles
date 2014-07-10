var fs = require('fs');
var emoji = require('emoji');
var emojis = Object.keys( emoji.EMOJI_MAP );
var emoji_dic = new Array();

for ( var i = 0; i < emojis.length; i++) {
  var e = emojis[i];
  var name = emoji.EMOJI_MAP[emojis[i]][1];
  emoji_dic[name] = e;
}

var emoji_names = Object.keys( emoji_dic );

var story_file = __dirname + '/../texts/pg8492.txt';

function tweetOneRandomLine() {
  fs.readFile( story_file, 'utf8', function (err, data) {
    if (err) {
      console.log( 'Error: ' + err );
    }

    var regex = /\s+/gi;
    var sentences = data.trim().replace(regex, ' ').split('.');
    var sentence = '';
    var ignore_words = [ 'a', 'de', 'it', 'us' ];
    var usable_sentences = ["test"];

    //find usable sentences
    for ( s  = 0; s < sentences.length; s++ ) {
      var sentence = sentences[s];

      for ( j = 0; j < emoji_names.length; j++ ){
        if ( ignore_words.indexOf( emoji_names[j] ) < 0 ){
          var re = new RegExp( ' '+emoji_names[j]+' ' );
          if( sentence.match(re) ){
            sentence = sentence.replace( emoji_names[j], emoji_dic[emoji_names[j]] );
            usable_sentences.push( sentence );
          }
        }
      }
    }

    console.log( usable_sentences[ Math.floor( (Math.random() * usable_sentences.length) + 1 ) ] );
  });
}

tweetOneRandomLine();

setInterval( tweetOneRandomLine, 1000 * 60 * 2 );

// slurp the king in yellow
// convert lines to emoji
// save lines in ? data structure (sqlite?)
// every day at noon, tweet a line


