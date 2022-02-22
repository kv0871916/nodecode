//type of compress in node js


var fs = require('fs');
var zlib = require('zlib');

//comprese the file with zlib

//fs.createReadStream('input.txt').pipe(fs.createWriteStream('input.txt.gz'));

var gzip = zlib.createGzip();
var inp = fs.createReadStream('input.txt');
var out = fs.createWriteStream('input.txt.gz');
inp.pipe(gzip).pipe(out);

console.log("compressed succesfully");

