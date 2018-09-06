var phrase = "Отходы  В  Доходы";
var brand = "Metal-Service";

var fontSize = getFontSize(
    phrase,
    (preload.width - animPlaceSize.recycling.position.x*2)*0.9,
    animPlaceSize.recycling.height*0.3
);
var horLine = animPlaceSize.recycling.position.x*1.9 + preload.width/20;

goAnimation(2500);

function goAnimation(period) {
    var startTime = Date.now();
    getDataLogoText().then(function (canvas){
        var data = canvas.ctx.getImageData(0, 0, canvas.canvas.width, canvas.canvas.height);

        drawingFuncList.push(
            function () {
                var imaginePart = 0;
                if ((Date.now()-startTime)>period){
                    completeAnimations.logo = true;
                    ctx.font = "bold "+(0.8*fontSize)+"px Arial";
                    clearInterval(preloadTimer);
                    stopPreload(function (period) {
                        moveImage({
                            //canvas
                            sX: (horLine + canvas.canvas.width - ctx.measureText(brand).width)/2,
                            sY: animPlaceSize.recycling.position.y + 3.4*fontSize,
                            dX: 0,
                            dY: $('#wrap>header').css('padding').split(' ')[0].replace('px', ''),
                            sWidth: ctx.measureText(brand).width,
                            sHeight: animPlaceSize.recycling.height + 2.6*fontSize,
                            dWidth: window.innerWidth/4,
                            dHeight: parseInt($('#wrap>header').css('height').replace('px', '')) - parseInt($('#wrap>header').css('padding').split(' ')[0].replace('px', ''))
                        }, {
                            //img
                            sHeight: animPlaceSize.recycling.height,
                            colors:
                            [
                                [0, 0, 0],
                                [255, 83, 113],
                                [255, 0, 0],
                                [255, 255, 255]
                            ]
                        }, {
                            //text
                            sfontSize: fontSize*0.8,
                            colors:
                                [
                                    [0, 0, 0],
                                    [255, 83, 113],
                                    [255, 0, 0],
                                    [255, 255, 255]
                                ]
                        }, 
                        period, 
                            function () {
                                $('#logoCanvas').css('position', 'inherit');
                            });
                    });
                    imaginePart = canvas.canvas.height;
                } else {
                    imaginePart = canvas.canvas.height*(Date.now()-startTime)/period;
                }
                ctx.putImageData(data, horLine, animPlaceSize.recycling.position.y, 0, 0, canvas.canvas.width, imaginePart);
            }
        );


    });
}



function getDataLogoText() {
    var testCanvas = createElement('canvas', {
        width: (preload.width - animPlaceSize.recycling.position.x*2)*0.9,
        height: fontSize*4 + animPlaceSize.recycling.height
    });
    var textCtx = testCanvas.getContext('2d');
    drawText(phrase,
        fontSize,
        "99, 192, 29",
        "center",
        {
            x: testCanvas.width/2,
            y: fontSize
        },
        textCtx);
    return new Promise(function (next) {
        drawLogo({
            canvas: testCanvas,
            ctx: textCtx
        }, next);
    });
}
//Text animation

function drawText(text, fontSize, fontColor, horizontalAlign, position, ctx) {
            ctx.textBaseline = "top";
            ctx.font = "bold "+fontSize+"px Arial";
            ctx.textAlign = horizontalAlign;
            ctx.fillStyle = "rgb("+(fontColor || "99, 192, 29")+")";
            ctx.fillText(text, position.x, position.y);
            ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
            ctx.strokeText(text, position.x, position.y);
}

function getFontSize(text, maxWidth, startFontSize) {
    ctx.font = "bold "+startFontSize+"px Arial";
    var currentWidth = ctx.measureText(text).width;
    return (currentWidth<=maxWidth)?
        startFontSize:
        getFontSize(text, maxWidth, startFontSize-1);
}
//Preload Logo

function drawLogo(canvas, next) {
    getImageData("./images/logo.png", {height: animPlaceSize.recycling.height})
        .then(setColor)
        .then(function(imageData){
            canvas.ctx.putImageData(imageData,
                canvas.canvas.width/2-imageData.width/2,
                2.4*fontSize);

            drawText(
                brand,
                fontSize*0.8,
                "0, 0, 0",
                "center",
                {
                    x: canvas.canvas.width/2,
                    y: 2.6*fontSize + imageData.height
                },
                canvas.ctx);
            next(canvas);

        });
}


function getImageData(src, sizes) {
    window.img = new Image();
    var img = window.img;
    img.style.display = "none";
    return new Promise(function (resolve) {
        img.onload = function(){
            var mul = Math.max((sizes.width || img.naturalWidth)/img.naturalWidth,(sizes.height || img.naturalHeight)/img.naturalHeight);
            var width = img.naturalWidth*mul;
            var height = img.naturalHeight*mul;
            var testCtx = createElement('canvas', {
                width: width,
                height: height
            }).getContext('2d');
            testCtx.drawImage(img, 0, 0, width, height);
            var imgData = testCtx.getImageData(0, 0, width, height);
            imgData.color = [0, 0, 0];
            resolve (imgData);
        };
        img.src = src;
    });
}



function setColor(imgData) {
   var color = imgData.color;
    return new Promise(function (resolve) {
        for (i=0; i<imgData.data.length; i=i+4){
            if (imgData.data[i] || imgData.data[i+1] || imgData.data[i+2]){
                for (j=0;j<color.length; ++j)
                    imgData.data[i+j] = color[j];
                imgData.data[i+4]=10;
            }
            if (i+4 === imgData.data.length) resolve(imgData);
        }
    });
}

function moveImage(canvasParams, imageParams, fontParams, period, callback) {

    var startAnimation = Date.now();
    var canvas = createElement('canvas',{
        width: canvasParams.sWidth,
        height: canvasParams.sHeight,
        id: 'logoCanvas',
        style:{
            position: "fixed",
            background: "none",
            top: canvasParams.sY,
            left: canvasParams.sX,
            zIndex: 2
        },
        move: function (x, y, width, height){
            this.width = width;
            this.height = height;
            this.style.top = y+"px";
            this.style.left = x+"px";
            return this;
        }
    });
    canvas.clear = function (drawingFunc) {
        var context = this.getContext('2d');
        context.clearRect(0, 0, this.width, this.height);
        drawingFunc(context);
        return this;
    };
    $("#logoCell").append(canvas);
    var mooverTimer = setInterval(moover, 1)
    function moover() {
        var completePart = (Date.now() - startAnimation)/period;
        if (completePart<1){
            var cnvX = currentState(canvasParams.sX, canvasParams.dX);
            var cnvY = currentState(canvasParams.sY, canvasParams.dY);
            var cnvWidth = currentState(canvasParams.sWidth, canvasParams.dWidth);
            var cnvHeight = currentState(canvasParams.sHeight, canvasParams.dHeight);

            var imgHeight = cnvHeight*imageParams.sHeight/canvasParams.sHeight;
            var imgWidth = imgHeight*window.img.width/window.img.height;

            var fontSize = fontParams.sfontSize*cnvHeight/canvasParams.sHeight;
            var textColor = getCurrentColor(fontParams.colors);

            resizeImg(imgWidth, imgHeight)
                .then(function (imgData) {
                    imgData.color = getCurrentColor(imageParams.colors);
                    setColor(imgData)
                        .then(function (imgData) {
                            canvas
                                .move(cnvX, cnvY, cnvWidth, cnvHeight)
                                .clear(function (context) {
                                    var center = canvas.width/2;
                                    context.putImageData(imgData, center-imgData.width/2, 0);
                                    var txtCol = textColor[0]+' ,'+textColor[1]+' ,'+textColor[2];
                                    drawText(brand, fontSize, txtCol, "center", {x: center, y: imgHeight+0.8*fontSize},context);
                                });
                        });
                })
        } else {
            stopAnimation();
            callback();
        }

        function resizeImg(width, height) {
            var img = window.img;
            var testCtx = createElement('canvas', {
               width: width,
               height: height
            }).getContext('2d');
            testCtx.drawImage(img, 0, 0, width, height);
            return new Promise(function (resolve) {
                resolve(testCtx.getImageData(0, 0, width, height));
            });
        }
        function currentState(from, to) {
            return from + (to-from)*completePart;
        }

        function getCurrentColor(colors) {
            var totalComp = (colors.length-1)*completePart;
            var curNum = Math.floor(totalComp);
            var comPartOnCurStage = totalComp - curNum;
            return colors[curNum].map(function (elem, num){
                return Math.round(elem + (colors[curNum+1][num] - elem)*comPartOnCurStage);
            });
        }
    }
    function stopAnimation() {
        clearInterval(mooverTimer);
        window.sliderMoveTimer = setInterval(sliderMoveLeft, 2000);
    }
}

