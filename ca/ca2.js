var fs = require('fs');
var PNG = require('pngjs').PNG;

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

function e(s,t,r,filename){
  //evolve from starting array s, t iterations

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
  png.pack().pipe(fs.createWriteStream(filename));
  return n;
}

//---- examples:

var a = [];
var b = [];

var width = 600;
var height = 370;

for ( i = 0; i < width; i++ ){
  a[i] = 0;
  b[i] = Math.floor( Math.random()*2 );
}

a[width/2] = 1;


var rule = Math.floor( Math.random()*256 );

console.log( "rule: " + rule );

e(a,height,rule,'foo.png');
e(b,height,rule,'bar.png');

