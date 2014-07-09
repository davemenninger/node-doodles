var emoji = require( "emoji" );

//console.log( Object.keys( emoji.EMOJI_MAP ).join(" ") );

var emojis = Object.keys( emoji.EMOJI_MAP );

for ( var i = 0; i < emojis.length; i++ )
{
  console.log( emojis[i] + " " + emoji.EMOJI_MAP[emojis[i]][1] );
}
