var fs = require('fs');

fs.readFile('./gamelist.txt', {encoding:'utf8', flag:'r+'},function (err, data) {
    if (err) throw err;
    var strNum = 0;
    data = data.replace(/Название/g, function (str) {
        return ++strNum + ". Название"
    });

});