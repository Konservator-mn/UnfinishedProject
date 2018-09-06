(function ($) {
    /*$.fn.hovered = hovered;
    $.fn.unhovered = unhovered;
    $.fn.incBg = incBg;
    $.fn.decBg = decBg;*/

})($);

$('.act').hover(function () {
    unsetActionTimer();
    $(this).hovered();
}, function () {
    setActionTimer();
    $(this).unhovered();
});
//setActionTimer();
function setActionTimer() {
    var elements = $('.act');
    var elementN = 0;
    window.actionTimer = setInterval(function () {
        if (elementN<elements.length){
            var element = $(elements[elementN++]);
            element.hovered();
            setTimeout(function () {
                element.unhovered();
            }, 1400);
        } else {
            element = $(elements[elementN]);
            element.hovered();
            elementN = 0;
            setTimeout(function () {
                element.unhovered();
            }, 1400);
        }
    }, 1500);

}
function unsetActionTimer() {
    clearInterval(window.actionTimer);

}
function unhovered() {
    $(this).removeClass('act-hovered');
    $(this).find('.action-pic').decBg(11, 10);

}
function hovered () {
    $(this).addClass('act-hovered');
    $(this).find('.action-pic').incBg(10, 11);

}
function incBg(fromSize, toSize) {
    var element = this;
    var step = 0.1;
    var curSize = fromSize;

    itter();

    function itter() {
        if (curSize<=toSize) {
            setTimeout(itter, 50);
            curSize+=step;
            element.css('background-size', 'auto '+curSize+'em');
        }

    }
    return this;
}

function decBg(fromSize, toSize) {
    var element = this;
    var step=0.1;
    var curSize = fromSize;
    itter();

    function itter() {
        if (curSize>=toSize){
            setTimeout(itter, 50);
            curSize-=step;
            element.css('background-size', 'auto '+curSize+'em');
        }

    }
    return this;
}


window.resizeFunctions.push(headersMargin);
headersMargin();
function headersMargin() {
    $('#logoCell').css('min-width', window.innerWidth/4+'px');
    var headers = $('header h1');
    for (i=1; i<headers.length;++i) {
        headers[i].style.marginLeft = (60 * (i+1)) + 'px';
    }
    
}
window.resizeFunctions.push(setSliderSize);
setSliderSize();
$('#slider')[0].current = 0;
$('#slider')[0].speed = 400;
function setSliderSize() {
    var width = $('#visible-image')[0].clientWidth;
    var height = window.innerHeight*0.45;
    $('#visible-image').css('max-width', width);
    $('#visible-image').css('min-height', height);

    var parentPadding = parseInt($('#visible-image').css('padding').replace('px', ''));
    var imgVisibleWidth = parseInt(width - parentPadding*2);

    $('.slider-item').css('width', imgVisibleWidth);
    $('.slider-image').css('height',height - $('.slider-item>h2')[0].clientHeight);
    $('.slider-image').css('width', imgVisibleWidth);
    $('#slider')[0].step = imgVisibleWidth + parentPadding;
}
$('#arrow-left').click(function () {
    if (!window.sliderMovementLeftTimer)
        sliderMoveLeft();
    clearInterval(window.sliderMoveTimer);
    setTimeout(function () {
        window.sliderMoveTimer = setInterval(sliderMoveLeft, 2000);
    }, 4000);
});

$('#arrow-right').click(function () {
    if (!window.sliderMovementRightTimer)
        sliderMoveRight();
    clearInterval(window.sliderMoveTimer);
    setTimeout(function () {
        window.sliderMoveTimer = setInterval(sliderMoveLeft, 2000);
    }, 4000);
});



function sliderMoveLeft() {
    var startTime = Date.now();
    if ($('#slider')[0].current === $('.slider-item').length-1){
        var movedElements = 0;
        do {
            $('#visible-image>ul')[0].appendChild(
                $('#visible-image>ul')[0].removeChild(
                    $('#visible-image>ul')[0].childNodes[0]
                )
            );
        } while (++movedElements < $('.slider-item').length-1);
        $('#slider')[0].current = 0;
        $('#visible-image>ul')[0].style.marginLeft = 0+'px';
    }
    $('#arrow-left').css('border-right-color', 'rgba(255, 181, 44, 0.7)');
    window.sliderMovementLeftTimer = setInterval(function () {
        var completePart = (Date.now() - startTime)/$('#slider')[0].speed;
        if (completePart<1) {
            var curMargin = - $('#slider')[0].current*$('#slider')[0].step  - $('#slider')[0].step * completePart;
            $('#visible-image>ul')[0].style.marginLeft = curMargin+'px';
        } else {
            $('#visible-image>ul')[0].style.marginLeft = - (++$('#slider')[0].current)*$('#slider')[0].step + 'px';
            $('#arrow-left').css('border-right-color', 'rgba(255, 255, 255, 0.7)');
            clearInterval(window.sliderMovementLeftTimer);
            window.sliderMovementLeftTimer = null;
        }
    }, 40);
}

function sliderMoveRight() {
    var startTime = Date.now();

    if (!$('#slider')[0].current){
        var movedElements = 0;
        do {
            $('#visible-image>ul')[0].insertBefore(
                $('#visible-image>ul')[0].removeChild(
                    $('#visible-image>ul')[0].childNodes[$('.slider-item').length-1]
                ),
                $('#visible-image>ul')[0].childNodes[0]
            );
        } while (++movedElements < $('.slider-item').length-1);
        $('#slider')[0].current = $('.slider-item').length-1;
        $('#visible-image>ul')[0].style.marginLeft = (-movedElements*$('#slider')[0].step)+'px';
    }

    $('#arrow-right').css('border-left-color', 'rgba(255, 181, 44, 0.7)');
    window.sliderMovementRightTimer = setInterval(function () {
        var completePart = (Date.now() - startTime)/$('#slider')[0].speed;
        if (completePart<1) {
            var curMargin = - $('#slider')[0].current*$('#slider')[0].step  + $('#slider')[0].step * completePart;
            $('#visible-image>ul')[0].style.marginLeft = curMargin+'px';
        } else {
            $('#visible-image>ul')[0].style.marginLeft = - (--$('#slider')[0].current)*$('#slider')[0].step + 'px';
            $('#arrow-right').css('border-left-color', 'rgba(255, 255, 255, 0.7)');
            clearInterval(window.sliderMovementRightTimer);
            window.sliderMovementRightTimer = null;
        }
    }, 40);
}

function showElement(button, element) {
    var toggleOptions = {
        duration: 1000,
        progress: function () {
            window.scrollBy(0, document.body.clientHeight);
        }
    };
    if ($(element).css('display')=='none'){
        closeFooterMenuItems().then(function(){
            $(element).toggle(toggleOptions);
            $(button).addClass('button-inaction');
        });
    } else {
        $(element).toggle(toggleOptions);
        $('.button-inaction').removeClass('button-inaction');
    }
}

function closeFooterMenuItems() {
    var collection = $('#footer-menu-windows>div');
    return new Promise(function (resolve) {
        for (i=0; i<collection.length; ++i){
            if ($(collection[i]).css('display')!='none')
                $(collection[i]).toggle({
                    duration: 1000,
                    always: function () {
                        resolve();
                        $('.button-inaction').removeClass('button-inaction');
                    }
                });
            if (i===collection.length-1) resolve();
        }

    });
}