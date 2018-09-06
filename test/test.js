function Recycling (height, topPoint){
    var sqrt3 = 1.73205;
    var hDivSqrt3 = height/sqrt3;
    var bottomY = topPoint.y + height;
    var sideLength = 2*hDivSqrt3;
    var pastLength = 0;
    var leftPoint = {
        x: topPoint.x - hDivSqrt3,
        y: bottomY
    };
    var rightPoint = {
        x: topPoint.x + hDivSqrt3,
        y: bottomY
    };

    console.log("A = ");
    console.log(topPoint);
    console.log("B = ");
    console.log(rightPoint);
    console.log("C = ");
    console.log(leftPoint);

    for (i=0; i<sideLength+5; ++i){
        var point = arrowTop()
        console.log(i+1+':');
            for (key in point){
                console.log('   '+key+'   x:'+point[key].x+'   y:'+point[key].y);
            }
    }


    function arrowTop() {
        var pastPart = (pastLength<sideLength)?(pastLength++/sideLength):(pastLength=0);
        console.log(pastPart);
        var pointOnLeft = {
            x: Math.round((topPoint.x-leftPoint.x)*pastPart + leftPoint.x),
            y: Math.round(leftPoint.y - (leftPoint.y - topPoint.y)*pastPart)
        };
        var pointOnRight = {
          x: Math.round((rightPoint.x-topPoint.x)*pastPart+topPoint.x),
          y: Math.round((rightPoint.y-topPoint.y)*pastPart+topPoint.y)
        };
        var pointOnBottom={
            x:Math.round(rightPoint.x-(rightPoint.x-leftPoint.x)*pastPart),
            y:Math.round(bottomY)
        };
        return {
            pointOnLeft: pointOnLeft,
            pointOnRight: pointOnRight,
            pointOnBottom: pointOnBottom
        };
    }
}

Recycling(300, {x: 500, y: 300});