// var instance = M.Carousel.getInstance(elem);

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
        numVisible: 3,
        indicators: true,
    });
});

