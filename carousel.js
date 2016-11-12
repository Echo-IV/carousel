$(document).ready(function() {

    var img_slider = {
        images: ['img/1.jpeg', 'img/2.jpeg', 'img/3.jpeg','img/4.jpeg']
    };

    var i = 0;

    while (i < img_slider.images.length) {

        $.get(img_slider.images[i], function() {

            $("#0").attr("src", img_slider.images[0]);
            $("#1").attr("src", img_slider.images[1]);
            $("#2").attr("src", img_slider.images[2]);
            $("#3").attr("src", img_slider.images[3]);
        });
        i++;
    }

    var slider = $('#carousel');
    var img = $('#carousel img');
    var indexImg = img.length - 1;
    var i = 0;
    var currentImg = img.eq(i);

    img.css('display', 'none');
    currentImg.css('display', 'block');

    $('#right').click(function() {
        i++;

        if (i <= indexImg) {
            img.css('display', 'none');
            currentImg = img.eq(i);
            currentImg.fadeIn();

        } else {
            i = 0;
            img.css('display', 'none');
            currentImg = img.eq(i);
            currentImg.fadeIn();
        }
    });

    $('#left').click(function() {
        i--;

        if (i >= 0) {
            img.css('display', 'none');
            currentImg = img.eq(i);
            currentImg.fadeIn();


        } else {
            i = 2;
            img.css('display', 'none');
            currentImg = img.eq(i);
            currentImg.fadeIn();
        }
    });

    function slideImg() {

        setTimeout(function() {

            if (i < indexImg) {
                i++;

            } else {
                i = 0;
            }

            img.css('display', 'none');
            currentImg = img.eq(i);
            currentImg.fadeIn();
            slideImg();
        }, 3000);
    }
    slideImg();
});
