var fs = require('fs'),
    PNG = require('pngjs').PNG;

var i = new PNG({
  width: 100,
  height: 200,
  filterType: -1
});

for (var y = 0; y < i.height; y++) {
  for (var x = 0; x < i.width; x++) {
    var idx = ( i.width*y + x) << 2;

    var col = ( Math.floor(Math.random()*2) == 0 ) ? 0x20 : 0xff;

    i.data[idx ] = col;   //red
    i.data[idx+1] = col;  //green
    i.data[idx+2] = col;  //blue
    i.data[idx+3] = 0xff; //opacity
  }
}


i.pack().pipe(fs.createWriteStream('out.png'));
