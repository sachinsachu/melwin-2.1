$(document).ready(function () {
    $('.menu .item').tab();
    $('.ui.accordion').accordion();


    $('img').on('click', function () {
        var images = [
            'images/1.jpg',
            'images/2.jpg',
            'images/1.jpg',
            'images/2.jpg',
            'images/1.jpg',
        ];

        yalb.defaults = {
            src: 'src',
            current: 1,
            'class': 'yalb',
            loop: true,
            open: true,
            width: 0,
            height: 0
        };

        yalb(images);

    });
});



