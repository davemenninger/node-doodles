
var fs = require('fs');
var emoji_file = __dirname + '/emojis.json';

fs.readFile(emoji_file, 'utf8', function (err, data) {
  if (err) {
    console.log('Error: ' + err);
    return;
  }
 
  var emojis = Object.keys(JSON.parse(data));
 
  var story_file = __dirname + '/pg8492.txt';

  //var http = require('http');

  //var options = {
  //  host: 'example.com',
  //  port: 80,
  //  path: '/foo.html'
  //};

  //http.get(options, function(resp){
  //  resp.on('data', function(chunk){
  //    //do something with chunk
  //    console.log( chunk.toString() );
  //  });
  //}).on("error", function(e){
  //  console.log("Got error: " + e.message);
  //});

  fs.readFile(story_file, 'utf8', function (err, data) {
    if (err) {
      console.log('Error: ' + err);
      return;
    }

    var regex = /\s+/gi;
    var wordCount = data.trim().replace(regex, ' ').split(' ').length; 
    var sentences = data.trim().replace(regex, ' ').split('.');
    var ignorewords = [ 'a',
                        //'back', 
                        'de',
                        'it', 
                        'on', 
                        'us' ];

    for ( i = 0; i < sentences.length ; i++ ){
      sentence = sentences[i];

      for ( j = 0; j < emojis.length; j++ ){
        if ( ignorewords.indexOf(emojis[j]) < 0  ){
          //TODO: do a smarter match here taking into account punctuation somehow
          sentence = sentence.replace( ' '+emojis[j]+' ', ' QQQQQ'+'-'+emojis[j]+' ' );
        }
      }
      if ( sentence.match(/QQQQQ/gi) ){
        console.log( sentence );
      }
    }

    console.log(wordCount);
  });

});

