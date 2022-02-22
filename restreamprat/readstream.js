var fs = require('fs');
var data = '';
var readstream = fs.createReadStream('input.txt');//create read stream

readstream.setEncoding('utf8');//set encoding
readstream.on('data', function (chunk) {
    //console.log('new chunk received: ' + chunk);
    data += chunk; //concatenate the chunks
    // data = data + chunk;
});
readstream.on('end', function () {
    console.log(`Read completed data: ${data}`);//print the data
});
readstream.on('error', function (err) {
    console.log(err.stack);//print the error
});

