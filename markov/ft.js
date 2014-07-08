var MarkovChain = require('markovchain').MarkovChain;

var sys = require("sys");

var stdin = process.openStdin();

stdin.addListener("data", function(d) {
    var word = d.toString().substring(0, d.length-1);
    console.log("you entered: [" + word + "]");
    var m = new MarkovChain({ files: '503-oneliner' });
    m.start( word ).end( 5 ).process( function(err,s){ console.log(s) } );
  });
