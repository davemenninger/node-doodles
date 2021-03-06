function rule(v,r){
  //calculates the next value of a cell given the neighbors in 3-cell array v, and using rule r (decimal number)
  var left   = v[0] || 0;
  var center = v[1] || 0;
  var right  = v[2] || 0;

  // n is the value of the three neighbors as a decimal number, thus which 3-pattern to match in the rule; e.g. 011 is 3
  var n =  ( parseInt(left,2)*4 + parseInt(center,2)*2 + parseInt(right,2)*1 );  
  // p = 2^n is a decimal number that in binary has a 1 in the n-th position (right-to-left); e.g. 2^3=8 and 8 = 00001000
  var p = Math.pow(2,n);  
  // (r&p) is logical and of the rule and p to get the value of the binary digit in the rule at the n-th position (right-to-left);
  // e.g.: decimal 30, aka rule 30, in binary is 00011110 so:
  //      00011110 <- the rule
  // AND  00001000 <- which digit we want
  // -------------
  //      00001000 <- will either have a single 1 or be all 0's
  // which is 8 (2^n) again, so divide by p to get 1.
  // or if the r&p was 0, then dividing by p just gives 0.
  var result = (r&p)/p ;  
  
  return result;
}

function d(s){
  //convert an array of ones and zeroes into text that looks better
  var text = '';
  for ( i = 0; i < s.length; i++ ){
    text += (s[i]==0) ? ' ' : '*';
  }
  return text;
}

function e(s,t,r){
  //evolve from starting array s, t iterations
  var n = s.slice(0);
  for (h = 0; h < t; h++) {
    console.log( d(n) );
    for (i = 0; i < s.length; i++) { 
      n[i] = rule( [ s[i-1], s[i], s[i+1] ], r );
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

e(a,50,150);
e(b,50,150);

