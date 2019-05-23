$(document).ready(function(){

    $('.review-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        items:1,
        dots: true,
        dotsEach: true,
        autoplay: true,
        autoplayTimeout: 10000,
        autoplayHoverPause: true,
    })

    $('.partners-carousel').owlCarousel({
        loop:true,
        margin:200,
        items: 5,
        dots: false,
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:2,
                margin: 10
            },
            600:{
                items:3,
                margin: 50
            },
            1000:{
                items:5
            }
        }
    });

    $('.blog-carousel').owlCarousel({
        loop:true,
        margin:50,
        items: 3,
        dots: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 15000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

});