function r(v,r){
  //calculates the next value of a cell given the neighbors in 3-cell array v, and using rule r (decimal number)
  var left   = v[0] || 0;
  var center = v[1] || 0;
  var right  = v[2] || 0;
  var t = ''+left+center+right+'';

  //TODO: do this with math instead:
  var rules = {
    30:  { '111': 0, '110': 0, '101': 0, '100': 1, '011': 1, '010': 1, '001': 1, '000': 0 },
    90:  { '111': 0, '110': 1, '101': 0, '100': 1, '011': 1, '010': 0, '001': 1, '000': 0 },
    110: { '111': 0, '110': 1, '101': 1, '100': 0, '011': 1, '010': 1, '001': 1, '000': 0 },
    184: { '111': 0, '110': 0, '101': 1, '100': 1, '011': 1, '010': 0, '001': 0, '000': 0 },
  };

  /*
  console.log( (r & 1)/1 ); // 0th digit in binary maps to t=000,
  console.log( (r & 2)/2 ); // 1th digit in binary maps to t=001
  console.log( (r & 4)/4 );  //...
  console.log( (r & 8)/8 );
  console.log( (r & 16)/16 );
  console.log( (r & 32)/32 );
  console.log( (r & 64)/64 );
  console.log( (r & 128)/128 ); // 8th digit in binary maps tp t=111
  // n = convert t to decimal; 000 = 0, 001 = 1, 010 = 2
  // n = (v[0])*4 + (v[1])*2 + (v[2])*1
  // p = 2^n ;  2^0 = 1, 2^1 = 2, 2^2 = 4
  // return ( ( r & p ) / p );  gives the binary digit in the p-th position of r
  */

  return rules[r][t];
}

function d(s){
  //convert an array of ones and zeroes into text that looks better
  var text = '';
  for ( i = 0; i < s.length; i++ ){
    text += (s[i]==0) ? ' ' : '*';
  }
  return text;
}

function e(s,t){
  //evolve from starting array s, t iterations
  var n = s.slice(0);
  for (h = 0; h < t; h++) {
    console.log( d(n) );
    for (i = 0; i < s.length; i++) { 
      n[i] = r( [ s[i-1], s[i], s[i+1] ], 110 );
    }
    s = n.slice(0);
  }
  console.log( d(n) );
  return n;
}

//---- examples:

var a = [];
var b = [];

for ( i = 0; i < 140; i++ ){
  a[i] = 0;
  b[i] = Math.floor( Math.random()*2 );
}

a[70] = 1;

e(a,16);
e(b,16);

