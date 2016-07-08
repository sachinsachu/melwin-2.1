$(document).ready(function () {
    $('.menu .item').tab();
    $('.ui.accordion').accordion();


    $('img').on('click', function () {
        var images = document.getElementsByTagName('img');

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



