$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        // center: true,
        items: 4,
        loop: true,
        margin: 4,
        // nav: true,
        // navText: ["<span class='carousel-nav-left'><i class='fa fa-chevron-left'></i></span>","<span class='carousel-nav-right'><i class='fa fa-chevron-right'></i></span>"],
        dots: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        // dotsContainer: true,
        // responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            320: {
                items: 2,
            },
            768: {
                items: 3,
            },
            1024: {
                items: 4,
            }
        }
    });
  });
