console.log(prom());

function prom() {
    var pr = function () {
      return new Promise(function (resolve) {
          var sum = 1+2;
          resolve(sum);
      });
    };
    pr().then(function (value) { return value+3; });
}