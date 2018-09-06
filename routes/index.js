var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', new Index());
});

router.post('/main', function (req, res, next) {
    res.render('main', new Main());
});
router.get('/test', function (req, res, next) {
    res.render('test');
});

module.exports = router;

function Index() {
    this.title = 'metall-serveice';
}
function Main() {
    this.headers=['Прием', 'металлолома'];
    this.messangers = [{
        icon: "/images/icons/viber.png",
        href: '###'
    },
    {
        icon: "/images/icons/telegram.png",
        href: 'https://t.me/Svyatoslav_Igorevich'
    },
    {
        icon: "/images/icons/skype.png",
        href: 'skype:+380931245678'
    },
    {
        icon:"/images/icons/mail.png",
        href:"mailto:xxxnobodyxxx@gmail.com"
    }];
    this.phones = [
        '+38 (093) 124-56-78',
        '+38 (067) 985-43-21'
    ];
    this.sliderItems = [
        new SliderItem("Порезка", "/images/cut.jpg"),
        new SliderItem("Демонтаж", "images/unmount.jpg"),
        new SliderItem("Вывоз", "images/vyvoz.jpg")
    ];
}

function SliderItem(head, imageHref) {
    this.head = head;
    this.imageHref = "url("+imageHref+")";
}


