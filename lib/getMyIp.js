var debug = require('debug')('lib:myIp');

module.exports = function (callback) {
    var req = require('http')
        .request(' http://icanhazip.com', function (res) {
            var ip = '';
            res.on('data', function (chunk) {
                ip+=chunk;
            });

            res.on('end', function () {
                debug("Server outer ip is " + ip);
                callback();
            });
        });



    req.on('error', function (e) {
        debug('Can\'t get server outer ip: '+ e.message);
        callback();
    });
    req.end('');
};

