var obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
};

obj.plus = function () {
    return new Promise(function (next) {
        console.log(this);
    });
};

obj.log = function () {
    for (key in this) console.log(key + " = "+this[key]);
};

obj.plus();