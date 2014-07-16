var fs = require('fs'),
    PNG = require('pngjs').PNG;

var pixel_array = [
                [ 0, 0, 0, 0, 0, 0, 0, 0 ],
                [ 0, 0, 1, 0, 0, 1, 0, 0 ],
                [ 0, 0, 1, 0, 0, 1, 0, 0 ],
                [ 0, 0, 0, 0, 0, 0, 0, 0 ],
                [ 0, 0, 0, 0, 0, 0, 0, 0 ],
                [ 0, 1, 0, 0, 0, 0, 1, 0 ],
                [ 0, 0, 1, 1, 1, 1, 0, 0 ],
                [ 0, 0, 0, 0, 0, 0, 0, 0 ]
                ];

var png = new PNG({
  height: pixel_array.length,
  width:  pixel_array[0].length,
  filterType: -1
});

for (var y = 0; y < png.height; y++) {
  for (var x = 0; x < png.width; x++) {
    var idx = ( png.width*y + x) << 2;

    var col = ( pixel_array[y][x] == 0 ) ? 0x20 : 0xff;

    png.data[idx ] = col;   //red
    png.data[idx+1] = col;  //green
    png.data[idx+2] = col;  //blue
    png.data[idx+3] = 0xff; //opacity
  }
}


png.pack().pipe(fs.createWriteStream('out.png'));
