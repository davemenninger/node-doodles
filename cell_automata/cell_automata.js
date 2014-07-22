var fs = require('fs');
var PNG = require('pngjs').PNG;
var _ = require('underscore');
_.mixin( require('underscore.deferred') );

var Twitter = require('node-twitter');

var twitterRestClient = new Twitter.RestClient(
    process.env.TWIT_CONSUMER_KEY,
    process.env.TWIT_CONSUMER_SECRET,
    process.env.TWIT_ACCESS_TOKEN,
    process.env.TWIT_ACCESS_TOKEN_SECRET
);

function calc(v,r){
  //calculates the next value of a cell given the neighbors in 3-cell array v, and using rule r (decimal number)
  var left   = v[0] || 0;
  var center = v[1] || 0;
  var right  = v[2] || 0;
  var n =  ( parseInt(left,2)*4 + parseInt(center,2)*2 + parseInt(right,2)*1 );  
  var p = Math.pow(2,n);  
  var result = (r&p)/p ;  
  return result;
}

function generate(s,t,r,filename){
  //evolve from starting array s, t iterations

  var dfd = new _.Deferred();

  var i_width = s.length;
  var i_height = t;

  var png = new PNG({
    height: i_height,
    width:  i_width,
    filterType: -1
  });

  //random colors
  var red =   (Math.floor(Math.random()*256));
  var green = (Math.floor(Math.random()*256));
  var blue =  (Math.floor(Math.random()*256));
  var bg = Math.floor( 256 - (red+green+blue)/3 );

  var n = s.slice(0);
  for (h = 0; h < t; h++) {
    for (i = 0; i < s.length; i++) { 
      n[i] = calc( [ s[i-1], s[i], s[i+1] ], r );

      var x=i;
      var y=h;
      var idx = ( s.length*y + x ) << 2;
      png.data[idx]=   ( n[i] == 0 ) ? red   : bg ;
      png.data[idx+1]= ( n[i] == 0 ) ? green : bg ;
      png.data[idx+2]= ( n[i] == 0 ) ? blue  : bg ;
      png.data[idx+3]= 0xff;

    }
    s = n.slice(0);
  }
  console.log("writing file");
  png.pack().pipe(fs.createWriteStream(filename)).on('close', function() {
    console.log("done");
    dfd.resolve( 'Rule ' + r );
  });

  return dfd.promise();
}


function tweet() {
  var width = 600;
  var height = 370;
  var row = [];
  var rule = Math.floor( Math.random()*256 );

  for ( i = 0; i < width; i++ ){
    row[i] = Math.floor( Math.random()*2 );
  }

  console.log( "width: " + width + " height: " + height  + " rule: " + rule );

  generate(row,height,rule,'ca.png').then( function(myTweet) {

    //tweet it
    console.log(myTweet);
    twitterRestClient.statusesUpdateWithMedia(
      {
        'status': myTweet,
        'media[]': __dirname + '/ca.png'
      },
      function(error, result) {
        if (error)
        {
          console.log('Error: ' + (error.code ? error.code + ' ' + error.message : error.message));
        } 

        if (result)
        {
          console.log(result);
        }
      }
    );
  });
}

tweet();

var hours = 5;

//console.log( "running every " + hours + " hours..." );

// 1000ms * 60s * 60m * N hours
//var timerID = setInterval( ca, 1000 * 60 * 60 * hours );
