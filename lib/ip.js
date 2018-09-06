var debug = require('debug')('lib:ip');
function getClientIp(req) {
    var ipAddress;
    var forwardedIpsStr = req.headers['x-forwarded-for'];
    if (forwardedIpsStr) {
        var forwardedIps = forwardedIpsStr.split(',');
        ipAddress = forwardedIps[0];
    }
    if (!ipAddress) {
        ipAddress = req.connection.remoteAddress;
    }
    return ipAddress;
};

module.exports = function (req, res, next) {
    debug("Got req from "+getClientIp(req));
    next();
}
