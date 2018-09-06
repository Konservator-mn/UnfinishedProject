var countObjProps = function () {
    var value = 0;
    return function (obj) {
      for (let key in obj)
        value++;
    }
}();

module.exports = function (req, res, next) {

};

