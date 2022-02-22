var fs = require('fs');


var data = 'data to write 1';

var writestream = fs.createWriteStream('input.txt');//create write stream

writestream.write(data);//write the data to the file
writestream.end();//end the stream
writestream.on('finish', function () {
    console.log(`Write completed with data:${data}`);//print the data
});

