export default class Animation {

    static openWindow(elem, ms = 300) {
        var opacity = 0.0;
        elem.style.opacity = opacity;

        var show = setInterval(function () {
            opacity += 0.1;
            if (opacity >= 1) {
                opacity = 1;
                clearInterval(show);
            }
            elem.style.opacity = opacity;
        }, ms / 10);
    }

    static closeWindow(elem, ms = 300) {
        var opacity = 1.0;
        var hide = setInterval(function () {

            opacity -= 0.1;
            if (opacity <= 0) {
                opacity = 0;
                clearInterval(hide);
            }
            elem.style.opacity = opacity;
        }, ms / 10);
    }
}