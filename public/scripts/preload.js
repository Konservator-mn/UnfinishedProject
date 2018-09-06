
//create preload and set styles
var preload = createElement('canvas', {
    width: window.innerWidth,
    height: window.innerHeight,
    id: 'preload',
    style: {
        display: 'block',
        position: 'fixed',
        left: '0px',
        top: '0px',
        backgroundImage: "url('../images/preloadBG3.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        zIndex: 2
    }
});
document.body.style.minHeight = window.innerHeight+'px';
document.body.style.maxWidth = window.innerWidth+'px';
document.body.appendChild(preload);
function createElement(tagName, attribs) {
    var element = document.createElement(tagName);
    if (attribs) attachProp(element, attribs);

    return element;

    function attachProp(element, propList) {
        for (attr in propList){
            if (propList[attr])
                if (typeof propList[attr] == "object"){
                    attachProp(element[attr], propList[attr]);
                } else {
                    element[attr] = propList[attr];
                }

        }
    }
}

var completeAnimations = {
    reclyng: false,
    logo: false
};

loadScripts()
    .then(preLoadMain)
    .then(loadMain)
    .then(loadStyleScripts);

//Set animation sizes
var animPlaceSize = {
    recycling:{
        position: {
            y: preload.height/15
        }
    }
};
if (preload.width>preload.height){
    animPlaceSize.recycling.height = preload.height/4;

} else {
    animPlaceSize.recycling.height = preload.width*0.1924500897298753;
}
animPlaceSize.recycling.position.x = animPlaceSize.recycling.height*Math.sqrt(3)/2;




// Draw animation
var ctx = preload.getContext('2d');
var drawingFuncList = [];

var preloadTimer = setInterval(function () {
    clearCanvas().then(function(){
        drawingFuncList.forEach(function (drawingFunc){
            drawingFunc();

        });

    });

}, 1);

function clearCanvas () {
    return new Promise(function (runNext) {
        ctx.clearRect(0, 0, preload.width, preload.height);
        runNext();
    });
}

//Add animation scripts
function loadScripts() {
    var loadedAnimationScripts = {
        recycling: false,
        logo: false
    };
    return new Promise(function(resolve){
        var whenAllScriptsLoaded = function () {
            if (loadedAnimationScripts.recycling && loadedAnimationScripts.logo)
                resolve();
        };
        loadScript('scripts/recycling.js', ()=>{loadedAnimationScripts.recycling = true; whenAllScriptsLoaded()});
        loadScript('scripts/preloadLogo.js', ()=>{loadedAnimationScripts.logo = true; whenAllScriptsLoaded()});
    });
}
function loadScript(url, onload) {
    return document.body.appendChild(
        createElement('script', {src:url, onload: onload || ""})
    );
}



function stopPreload(moveLogo) {
   // if (completeAnimations.reclyng && completeAnimations.logo) {
        var appearTime = 2000;
        $(preload).fadeOut(appearTime);
        $('#wrap').fadeIn(appearTime);
        setTimeout(function () {
            moveLogo(appearTime);

        }, 500);

   /* } else {

    }*/
}

function preLoadMain() {
    window.mobile = function () {
        var regExp = new RegExp('mobile', 'gi');
        var str = window.navigator.appVersion + window.navigator.userAgent;
        return regExp.test(str);
    }();
    window.resizeFunctions = [];
    window.onresize = function (ev){
        window.resizeFunctions.forEach(function(resizer){
           resizer();
        });
    };
    document.head.appendChild(
        createElement('link', {
            rel:'stylesheet',
            href:'stylesheets/style.css'
        })
    );

    return new Promise(function(resolve, reject){
        document.body.appendChild(
            createElement('div', {
                id: 'wrap'
            })
        );
        loadScript('/scripts/jquery-3.3.1.min.js', resolve);
    });
}

function loadMain() {
    return new Promise(function (resolve) {
        $.post('/main', function (main) {
            $("#wrap").html(main);
            resolve();
        });
    });
}

function loadStyleScripts() {
    return new Promise(function (resolve) {
        loadScript('./scripts/style.js', resolve);
    });
}

