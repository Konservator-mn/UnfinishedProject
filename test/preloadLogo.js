function drawPreloadLogo(ctx) {
    var img = new Image();
    img.addEventListener('load', function () {
        drawInAnotherColor(getImageData(img));
    }, false);
    img.src = 'images/logo.png';

    function drawInAnotherColor(imageData) {
        getAnotherColor(imageData)
            .then(function (imageData) {
                ctx.clearRect(100, 100, img.naturalWidth, img.naturalHeight);
                ctx.putImageData(imageData, 100, 100);
                setTimeout(function () {
                    drawInAnotherColor(imageData);
                }, 1);
            });
        return;
    }

    function getImageData(img) {
        var testCtx = createTestCtx(img.naturalWidth, img.naturalHeight);
        testCtx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight);
        return testCtx.getImageData(0, 0, img.naturalHeight, img.naturalHeight);

        function createTestCtx(w, h) {
            var testCanvas = document.createElement('canvas');
            testCanvas.width=w;
            testCanvas.height=h;
            testCanvas.style.display = 'none';
            return testCanvas.getContext('2d');
        }
    }

    var Colors = function () {
        var colors = [
            [102, 105, 255],
            [155, 187, 255],
            [255, 255, 255],
            [255, 250, 181],
            [255, 238, 45],
            [232, 125, 18],
            [255, 32, 31],
            [0, 0, 0]
        ];

        function SmoothColorTransition(curRgb, nextRgb) {
            var rSteps = nextRgb[0]-curRgb[0];
            var gSteps = nextRgb[1]-curRgb[1];
            var bSteps = nextRgb[2]-curRgb[2];

            var rStepsAbs = Math.abs(rSteps);
            var gStepsAbs = Math.abs(gSteps);
            var bStepsAbs = Math.abs(bSteps);

            var moreSteps = Math.max(rStepsAbs, gStepsAbs, bStepsAbs);

            if (moreSteps===rStepsAbs){
                var rCurrent = curRgb[0];
                var rStep = rSteps/rStepsAbs;
                Object.defineProperties(this, {
                    passedPercent:{
                        get: function () {
                            return (rCurrent-curRgb[0])/rSteps;
                        }
                    },
                    red:{
                        get: function () {
                            var result = rCurrent;
                            rCurrent+=rStep;
                            return result;
                        }
                    },
                    green: {
                        get: function () {
                            return Math.round(this.passedPercent*gSteps)+curRgb[1];
                        }
                    },
                    blue: {
                        get: function () {
                            return Math.round(this.passedPercent*bSteps)+curRgb[2];
                        }
                    }

                });
            } else if(moreSteps === gStepsAbs){
                var gCurrent = curRgb[1];
                var gStep = gSteps/gStepsAbs;
                Object.defineProperties(this, {
                    passedPercent:{
                        get: function () {
                            return (gCurrent-curRgb[1])/gSteps;
                        }
                    },
                    red:{
                        get: function () {
                            return Math.round(this.passedPercent*rSteps)+curRgb[0];
                        }
                    },
                    green:{
                        get: function () {
                            var result = gCurrent;
                            gCurrent+=gStep;
                            return result;
                        }
                    },
                    blue:{
                        get: function () {
                            return Math.round(this.passedPercent*bSteps)+curRgb[2];
                        }
                    },
                });
            } else {
                var bCurrent = curRgb[2];
                var bStep = bSteps/bStepsAbs;
                Object.defineProperties(this, {
                    passedPercent:{
                        get: function () {
                            return (bCurrent-curRgb[2])/bSteps;
                        }
                    },
                    red:{
                        get: function () {
                            return Math.round(this.passedPercent*rSteps)+curRgb[0];
                        }
                    },
                    green:{
                        get: function () {
                            return Math.round(this.passedPercent*gSteps)+curRgb[1];
                        }
                    },
                    blue:{
                        get: function () {
                            var result = bCurrent;
                            bCurrent+=bStep;
                            return result;
                        }
                    },
                });
            }
        }

        var num = 0;

        function getNextColorSet() {
            var nextNum = num+1;
            if (nextNum<colors.length){
                return new SmoothColorTransition(colors[num++], colors[nextNum]);
            } else
                return false;
        }
        var colorSet = getNextColorSet();
        return function () {
            if (colorSet){
                if (colorSet.passedPercent>=1){
                    colorSet = getNextColorSet();
                }
                return {
                    red: colorSet.red,
                    green: colorSet.green,
                    blue: colorSet.blue
                };
            } else {
                return false;
            }
        };
    }();



    function getAnotherColor(imgData) {
        var currentColor = Colors();
        var arr = imgData.data;
        return new Promise(function (resolve, reject) {
            if (currentColor) {
                for (i = 0; i < arr.length; i += 4) {
                    if (arr[i] || arr[i + 1] || arr[i + 2]) {
                        arr[i] = currentColor.red;
                        arr[i + 1] = currentColor.green;
                        arr[i + 2] = currentColor.blue;
                    }

                    if ((i + 4) === arr.length) {
                        resolve(imgData);
                        return imgData;
                    }
                }
            } else {
                console.log('timePass = '+(Date.now()-startTime)+'ms');
                reject();
            }

        });

    }
}


