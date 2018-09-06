var http = require('http');
var logger = require('morgan')('dev');
var server = http.createServer(function (req, res) {
    logger(req, res, function () {
        console.log(arguments);
    });
    res.end('Hello world');
}).listen(3000);

server.on('listening', function () {
    console.log('Listen ... ');
});