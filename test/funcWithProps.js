function doSmth() {
    console.log("I'm function! I do smth important!");
    function insider () {
        console.log("I'm helper! One from team, which does smth important");
    }
    insider.hideProp = function () {
        console.log("I'm spy");
    };
    return insider;
}

var one = doSmth();
one();
one.hideProp();