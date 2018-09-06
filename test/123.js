function ObjectCreator() {
    this.countTimes = 10;
    this.sayIt = function () {
        if (this.countTimes)
            console.log(this.countTimes--);
        else
            console.log(this);
    };
}

var obj = new ObjectCreator();

setInterval(obj.sayIt, 1);