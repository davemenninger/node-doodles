var emoji = require( "emoji" );
var emojis = Object.keys( emoji.EMOJI_MAP );

var my_map = new Array();

for ( var i = 0; i < emojis.length; i++ )
{
  var e = emojis[i] + '';
  var name = emoji.EMOJI_MAP[emojis[i]][1]
  my_map[name] = e;
}

console.log( my_map['bathtub'] );
console.log( my_map['light rail'] );
console.log( my_map['clock face one-thirty'] );
