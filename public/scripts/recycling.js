drawingFuncList.push(
    Recycling (animPlaceSize.recycling.height, animPlaceSize.recycling.position, 2400)
);

function Recycling (height, topPoint, lapTime) {
    var comleteAnimationPart = ((Date.now() - time.start)%lapTime)/lapTime;
    var arrows = [{}, {}, {}];

    var hM0002 = 0.002411383194609998*height;
    var hM0028 = 0.02845550660479111*height;
    var hM0044 = 0.04446361680539*height;
    var hM0046 = 0.046875*height;
    var hM0081 = 0.08118988160479111*height;
    var hM0133 = 0.13392425660479113*height;
    var hM0138 = 0.13821361680539002*height;
    var hM0170 = 0.17097562366751706*height;
    var hM0185 = 0.18508861680539002*height;
    var hM0292 = 0.2929730648237803*height;
    var hM0443 = 0.44342601258483466*height;
    var hM0455 = 0.4553528280333626*height;
    var hM0471 = 0.47188151918962584*height;
    var hM0577 = 0.5773502691896258*height;
    var hM0601 = 0.6011942335239576*height;
    var hM0605 = 0.6058057757944169*height;
    var hM0682 = 0.6828190191896258*height;
    var hM0694 = 0.6949442335239576*height;
    var hM0861 = 0.86178638319461*height;
    var hM0906 = 0.90625*height;
    var hM0955 = 0.95553638319461*height;
    var hM1187 = 1.1875*height;
    var hM1093 = 1.09375*height;
    var hM1325 = 1.3256761620467687*height;

    var tpxMhM0577 = topPoint.x - hM0577;
    var tpyPh = topPoint.y + height;
    var tpxPhM0028 = topPoint.x + hM0028;
    var tpxMhM0133 = topPoint.x - hM0133;
    var tpxhM0577 = topPoint.x + hM0577;
    var tpxMhM0471 = topPoint.x - hM0471;
    var tpyPhM1187 = topPoint.y + hM1187;
    var tpyPhM1093 = topPoint.y + hM1093;
    var tpyPhM0906 = topPoint.y + hM0906;
    var tpyPhM0044 = topPoint.y + hM0044;
    var tpyPhM0138 = topPoint.y + hM0138;
    var tpxPhM0605 = topPoint.x + hM0605;
    var tpyPhM0861 = topPoint.y + hM0861;
    var tpxPhM0443 = topPoint.x + hM0443;
    var tpyPhM0955 = topPoint.y + hM0955;
    var tpxPhM0682 = topPoint.x + hM0682;
    var tpxPhM0170 = topPoint.x + hM0170;
    var tpxMhM0455 = topPoint.x - hM0455;
    var tpxMhM0292 = topPoint.x - hM0292;
    var tpxPhM1325 = topPoint.x + hM1325;

    function setPointsCoords() {
        arrows.turnHead = comleteAnimationPart<0.09133861680539;
        arrows.turnBody = comleteAnimationPart<0.6480692335239576;
        var hMcap = height*comleteAnimationPart;

        var hMcap0026 = 0.026400478559334827*hMcap;
        var hMcap0265 = 0.26581164949036284*hMcap;
        var hMcap0311 = 0.31153861969926305*hMcap;
        var hMcap0486 = 0.48679976072033254*hMcap;
        var hMcap0513 = 0.5132002392796674*hMcap;
        var hMcap0577 = 0.5773502691896258*hMcap;

        var hMcap1026 = 1.0264004785593348*hMcap;
        var hMcap1777 = 1.777777777777778*hMcap;
        var hMcap1466 = 1.4662391580785148*hMcap;
        var hMcap1513 = 1.5132002392796675*hMcap;
        var hMcap1154 = 1.1547005383792517*hMcap;

        var hMcap2026 = 2.0264004785593346*hMcap;
        var hMcap2043 = 2.0435894272681403*hMcap;
        var hMcap2052 = 2.0528009571186696*hMcap;


        arrows[0].top = SetCoord(
            tpxMhM0577 + hMcap0577,
            tpyPh - hMcap
        );
        arrows[1].top = SetCoord(
            topPoint.x + hMcap0577,
            topPoint.y + hMcap
        );
        arrows[1].headBottomRight = {
            x: topPoint.x - 0.21511413820958222*height + hMcap0577
        };
        arrows[1].headBottomLeft = {
            x: topPoint.x + 0.10964538820958222*height + hMcap0577
        };
        arrows[1].bodyTopLeft = {
            x: tpxPhM0028 + hMcap0577
        };
        arrows[1].bodyTopRight = {
            x: tpxMhM0133 + hMcap0577
        };
        arrows[2].top = SetCoord(
            tpxhM0577 - 2*hMcap0577,
            tpyPh
        );
        if (arrows.turnHead){
            arrows[0].headBottomLeft = SetCoord(
                tpxMhM0471 - 2.9324783161570296*hMcap,
                topPoint.y + 0.8810534981883791*height + 0.40415820933958463*hMcap
            );
            arrows[0].headBottomRight = SetCoord(
                tpxMhM0471 + 0.6230772393985261*hMcap,
                tpyPhM1187 - hMcap1026
            );
            arrows[0].headTurnPointLeft = SetCoord(
                tpxMhM0577 - hMcap1777,
                tpyPh - hMcap1026
            );
            arrows[0].headTurnPointRight = SetCoord(
                tpxMhM0577 + hMcap1777,
                tpyPh + hMcap1026
            );
            arrows[0].bodyTurnPointRight = SetCoord(
                tpxMhM0471 - hMcap0265,
                tpyPhM1093 - hMcap0513
            );
            arrows[0].bodyTurnPointLeft = SetCoord(
                topPoint.x - 0.19224802633651428*height - hMcap2043,
                tpyPhM0906 + hMcap0513
            );
            arrows[0].bodyTopLeft = SetCoord(
                tpxMhM0471 - hMcap2043,
                topPoint.y + 0.9405267490941895*height + 0.20207910466979231*hMcap
            );
            arrows[0].bodyTopRight = SetCoord(
                tpxMhM0471 - hMcap0265,
                tpyPhM1093 - hMcap0513
            );
            arrows[1].headBottomRight.y = topPoint.y - hM0002 + 1.0528009571186696*hMcap;
            arrows[1].headBottomLeft.y = topPoint.y + hM0185 - 3.052800957118669*hMcap;
            arrows[1].headTurnPointRight = SetCoord(
                topPoint.x - hMcap1777,
                topPoint.y + 0.000006999999999993123*height + hMcap1026
            );
            arrows[1].headTurnPointLeft = SetCoord(
                topPoint.x + hMcap1777,
                topPoint.y - hMcap1026
            );
            arrows[1].bodyTurnPointRight = SetCoord(
                tpxMhM0133 + hMcap0577,
                tpyPhM0044 + hMcap0026
            );
            arrows[1].bodyTurnPointLeft = SetCoord(
                tpxPhM0028 + hMcap0577,
                tpyPhM0138 - hMcap2026
            );
            arrows[1].bodyTopLeft.y = tpyPhM0138 - hMcap2026;
            arrows[1].bodyTopRight.y = tpyPhM0044 + hMcap0026;

            arrows[2].headBottomRight = SetCoord(
                topPoint.x + 0.686995657399208*height - 1.200427508588152*hMcap,
                topPoint.y + 0.81491138319461*height - hMcap0026
            );
            arrows[2].headBottomLeft = SetCoord(
                topPoint.x + 0.3622361309800435*height + 2.355128046967404*hMcap,
                topPoint.y + 1.00241138319461*height + hMcap2026
            );
            arrows[2].headTurnPointRight = SetCoord(
                tpxhM0577,
                tpyPh - hMcap2052
            );
            arrows[2].headTurnPointLeft = SetCoord(
                tpxhM0577,
                tpyPh + hMcap2052
            );
            arrows[2].bodyTurnPointRight = SetCoord(
                tpxPhM0605 - hMcap0311,
                tpyPhM0861 + hMcap0486
            );
            arrows[2].bodyTurnPointLeft = SetCoord(
                tpxPhM0443 + hMcap1466,
                tpyPhM0955 + hMcap1513
            );
            arrows[2].bodyTopRight = SetCoord(
                tpxPhM0605 - hMcap0311,
                tpyPhM0861 + hMcap0486
            );
            arrows[2].bodyTopLeft = SetCoord(
                tpxPhM0443 + hMcap1466,
                tpyPhM0955 + hMcap1513
            );
        } else {
            arrows[0].headBottomLeft = SetCoord(
                topPoint.x - 0.7924644073992081*height + hMcap0577,
                topPoint.y + 0.9975886168053898*height - hMcap
            );
            arrows[0].headBottomRight = SetCoord(
                topPoint.x - 0.4677048809800436*height + hMcap0577,
                topPoint.y + 1.18508861680539*height - hMcap
            );
            arrows[0].bodyTurnPointRight = SetCoord(
                topPoint.x - 0.4961603875848347*height,
                topPoint.y + 1.046875*height
            );
            arrows[0].bodyTurnPointLeft = SetCoord(
                topPoint.x - 0.658540150794417*height,
                topPoint.y + 0.953125*height
            );
            arrows[0].bodyTopLeft = SetCoord(
                topPoint.x - 0.711274525794417*height + hMcap0577,
                topPoint.y + 1.0444636168053898*height - hMcap
            );
            arrows[0].bodyTopRight = SetCoord(
                topPoint.x - 0.5488947625848347*height + hMcap0577,
                topPoint.y + 1.13821361680539*height - hMcap
            );
            arrows[1].headBottomRight.y = topPoint.y + hM0002 + hMcap;
            arrows[1].headBottomLeft.y = topPoint.y - hM0185 + hMcap;
            arrows[1].bodyTurnPointRight = SetCoord(
                topPoint.x - hM0081,
                topPoint.y + hM0046
            );
            arrows[1].bodyTurnPointLeft = SetCoord(
                topPoint.x + hM0081,
                topPoint.y - hM0046
            );
            arrows[1].bodyTopLeft.y = topPoint.y - hM0138 + hMcap;
            arrows[1].bodyTopRight.y = topPoint.y - hM0044 + hMcap;
            arrows[2].headBottomRight = SetCoord(
                tpxPhM0682 - hMcap1154,
                topPoint.y + 0.8125*height
            );
            arrows[2].headBottomLeft = SetCoord(
                tpxPhM0682 - hMcap1154,
                tpyPhM1187
            );
            arrows[2].bodyTurnPointRight = SetCoord(
                tpxhM0577,
                tpyPhM0906
            );
            arrows[2].bodyTurnPointLeft = SetCoord(
                tpxhM0577,
                tpyPhM1093
            );
            arrows[2].bodyTopRight = SetCoord(
                tpxPhM0682 - hMcap1154,
                tpyPhM0906
            );
            arrows[2].bodyTopLeft = SetCoord(
                tpxPhM0682 - hMcap1154,
                tpyPhM1093
            );
        }


        if (comleteAnimationPart<0.5567306167185677){
            arrows[0].bodyBottomLeft = SetCoord(
                tpxPhM0170 - hMcap1154,
                tpyPhM0906
            );
            arrows[0].bodyBottomRight = SetCoord(
                tpxPhM0170 - hMcap1154,
                tpyPhM1093
            );
            arrows[1].bodyBottomRight = SetCoord(
                tpxMhM0455 + hMcap0577,
                topPoint.y + hM0601 - hMcap
            );
            arrows[1].bodyBottomLeft = SetCoord(
                tpxMhM0292 + hMcap0577,
                topPoint.y + hM0694 - hMcap
            );
            arrows[2].bodyBottomLeft = SetCoord(
                topPoint.x + 0.12199744115626328*height + hMcap0577,
                topPoint.y + 0.3988057664760424*height + hMcap
            );
            arrows[2].bodyBottomRight = SetCoord(
                topPoint.x + 0.2843772043658455*height + hMcap0577,
                topPoint.y + 0.3050557664760424*height + hMcap
            );
        } else if (arrows.turnBody){
            arrows[0].bodyBottomLeft = SetCoord(
                topPoint.x + 0.6658472829729105*height - hMcap2043,
                topPoint.y + 0.6205357142857142*height + hMcap0513
            );
            arrows[0].bodyBottomRight = SetCoord(
                topPoint.x - 0.32389603563787644*height - hMcap0265,
                topPoint.y + 1.3794642857142858*height - hMcap0513
            );
            arrows[1].bodyBottomRight = SetCoord(
                tpxMhM0455 + hMcap0577,
                topPoint.y + 0.029765662095386197*height + hMcap0026
            );
            arrows[1].bodyBottomLeft = SetCoord(
                tpxMhM0292 + hMcap0577,
                topPoint.y + 1.266372804952529*height - hMcap2026
            );
            arrows[2].bodyBottomLeft = SetCoord(
                topPoint.x - 0.37287421814913024*height + hMcap1466,
                topPoint.y + 0.11309148076175657*height + hMcap1513
            );
            arrows[2].bodyBottomRight = SetCoord(
                topPoint.x + 0.779248863671239*height - hMcap0311,
                topPoint.y + 0.5907700521903281*height + hMcap0486
            );
        } else {
            arrows[0].bodyBottomLeft = SetCoord(
                topPoint.x - 1.0327030972229885*height + hMcap0577,
                topPoint.y + 1.6011942335239575*height - hMcap
            );
            arrows[0].bodyBottomRight = SetCoord(
                topPoint.x - 0.8703233340134062*height + hMcap0577,
                topPoint.y + 1.6949442335239575*height - hMcap
            );
            arrows[1].bodyBottomRight = SetCoord(
                tpxMhM0455 + hMcap0577,
                topPoint.y - hM0601 + hMcap
            );
            arrows[1].bodyBottomLeft = SetCoord(
                tpxMhM0292 + hMcap0577,
                topPoint.y - hM0694 + hMcap
            );
            arrows[2].bodyBottomLeft = SetCoord(
                tpxPhM1325 - hMcap1154,
                tpyPhM1093
            );
            arrows[2].bodyBottomRight = SetCoord(
                tpxPhM1325 - hMcap1154,
                tpyPhM0906
            );
        }
        
    }

    arrows.draw = function () {
        this.forEach(drawArrow);
        
    };
    function drawArrow(arrow, num, arrows) {
        if (arrows.turnHead){
            startDraw(arrow.headBottomLeft);
            line(arrow.bodyTopLeft);
            bezier(arrow.bodyTurnPointLeft, arrow.bodyBottomLeft);
            line(arrow.bodyBottomRight);
            bezier(arrow.bodyTurnPointRight, arrow.bodyTopRight);
            line(arrow.headBottomRight);
            ctx.stroke();

            startDraw(arrow.top);
            bezier(arrow.headTurnPointLeft, arrow.headBottomLeft);
            line(arrow.bodyTopLeft);
            bezier(arrow.bodyTurnPointLeft, arrow.bodyBottomLeft);
            line(arrow.bodyBottomRight);
            bezier(arrow.bodyTurnPointRight, arrow.bodyTopRight);
            line(arrow.headBottomRight);
            bezier(arrow.headTurnPointRight, arrow.top);
            ctx.fill();

            startDraw(arrow.headBottomLeft);
            bezier(arrow.headTurnPointLeft, arrow.top);
            bezier(arrow.headTurnPointRight, arrow.headBottomRight);
            ctx.stroke();

            startDraw(arrow.headBottomRight);
            bezier2(arrow.headTurnPointRight, arrow.headTurnPointLeft, arrow.headBottomLeft);
            bezier(arrow.headTurnPointLeft, arrow.top);
            bezier(arrow.headTurnPointRight, arrow.headBottomRight);
            ctx.fill();
        } else if (arrows.turnBody){
            startDraw(arrow.bodyBottomRight);
            line(arrow.bodyBottomLeft);
            bezier(arrow.bodyTurnPointLeft, arrow.bodyTopLeft);
            ctx.stroke();

            startDraw(arrow.bodyTopLeft);
            line(arrow.bodyTopRight);
            bezier(arrow.bodyTurnPointRight, arrow.bodyBottomRight);
            line(arrow.bodyBottomLeft);
            bezier(arrow.bodyTurnPointLeft, arrow.bodyTopLeft);
            ctx.fill();

            startDraw(arrow.bodyTopLeft);
            bezier2(
                arrow.bodyTurnPointLeft,
                arrow.bodyTurnPointRight,
                arrow.bodyBottomRight
            );
            bezier(arrow.bodyTurnPointRight, arrow.bodyTopRight);
            line(arrow.headBottomRight);
            ctx.fill();

            startDraw(arrow.headBottomLeft);
            line(arrow.top);
            line(arrow.headBottomRight);
            line(arrow.headBottomLeft);
            ctx.fill();

            startDraw(arrow.bodyTopLeft);
            line(arrow.headBottomLeft);
            line(arrow.top);
            line(arrow.headBottomRight);
            line(arrow.bodyTopRight);
            bezier(arrow.bodyTurnPointRight, arrow.bodyBottomRight);
            ctx.stroke();


        } else {
            ctx.beginPath();
            ctx.moveTo(arrow.top.x, arrow.top.y);
            line(arrow.headBottomRight);
            line(arrow.bodyTopRight);
            line(arrow.bodyBottomRight);
            line(arrow.bodyBottomLeft);
            line(arrow.bodyTopLeft);
            line(arrow.headBottomLeft);
            line(arrow.top);
            ctx.fill();
            ctx.stroke();
        }
    }
    function startDraw (fromPnt){
        ctx.beginPath();
        ctx.moveTo(fromPnt.x, fromPnt.y);
        
    }
    function bezier(pnt1, pnt2) {
        ctx.quadraticCurveTo(pnt1.x, pnt1.y, pnt2.x, pnt2.y);
        
    }
    function bezier2(pnt1, pnt2, pnt3) {
        ctx.bezierCurveTo(pnt1.x, pnt1.y, pnt2.x, pnt2.y, pnt3.x, pnt3.y);
        
    }
    function line(toPnt) {
        ctx.lineTo(toPnt.x, toPnt.y);
        
    }

    function drawCanvas() {
        return new Promise(function (resolve) {
            arrows.draw();
            resolve();
            
        });
    }
    function SetCoord(x, y) {
        return {
            x: x,
            y: y
        };
    }

    return function () {
        ctx.lineWidth = 2;
        ctx.lineJoin = "round";
        ctx.strokeStyle = "rgba(255, 255, 255, 0.9)";
        ctx.fillStyle = "rgb(99, 192, 29)";
        setPointsCoords();
        drawCanvas()
            .then(function(){
                completeAnimations.reclyng = ((Date.now() - time.start)/lapTime>2);
                comleteAnimationPart = ((Date.now() - time.start)%lapTime)/lapTime;
            });
    };
}

