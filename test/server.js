var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    var stream = fs.createReadStream('./recycling-final-optimized.html');
    stream.on('data', function (data) {
        res.end(data);
    });
}).listen(3000);