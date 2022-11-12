(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Modal Video
    var $videoSrc;
    $('.btn-play').click(function () {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);
    $('#videoModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })
    $('#videoModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    })



    
  
    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Project carousel
    $(".project-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:2
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });

    var app = new Vue({
        el: '#app',
        data: {
            currentSlide: 0,
            isPreviousSlide: false,
            isFirstLoad: true,
            slides: [
                {
                    headlineFirstLine: "Lorem",
                    headlineSecondLine: "Vitaer",
                    sublineFirstLine: "Nihil sub sole",
                    sublineSecondLine: "novum",
                    bgImg: "https://i.postimg.cc/C5yvGSkm/slide0.jpg",
                    rectImg: "https://i.postimg.cc/vTW0XkvM/slide-rect0.jpg"
                },
                {
                    headlineFirstLine: "Nulla",
                    headlineSecondLine: "Auctor",
                    sublineFirstLine: "Il n'y a rien de neuf sous",
                    sublineSecondLine: "le soleil",
                    bgImg: "https://i.postimg.cc/Qx34VNXM/slide1.jpg",
                    rectImg: "https://i.postimg.cc/ryWZ8R2b/slide-rect1.jpg"
                },
                {
                    headlineFirstLine: "Nullam",
                    headlineSecondLine: "Ultricies",
                    sublineFirstLine: "Τίποτα καινούργιο κάτω από",
                    sublineSecondLine: "τον ήλιο",
                    bgImg: "https://i.postimg.cc/t4RBtrnQ/slide2.jpg",
                    rectImg: "https://i.postimg.cc/3JFLGMRF/slide-rect2.jpg"
                }
            ]
        },
      mounted: function () {
        var productRotatorSlide = document.getElementById("app");
            var startX = 0;
            var endX = 0;
    
            productRotatorSlide.addEventListener("touchstart", (event) => startX = event.touches[0].pageX);
    
            productRotatorSlide.addEventListener("touchmove", (event) => endX = event.touches[0].pageX);
    
            productRotatorSlide.addEventListener("touchend", function(event) {
                var threshold = startX - endX;
    
                if (threshold < 150 && 0 < this.currentSlide) {
                    this.currentSlide--;
                }
                if (threshold > -150 && this.currentSlide < this.slides.length - 1) {
                    this.currentSlide++;
                }
            }.bind(this));
      },
        methods: {
            updateSlide(index) {
                index < this.currentSlide ? this.isPreviousSlide = true : this.isPreviousSlide = false;
                this.currentSlide = index;
                this.isFirstLoad = false;
            }
        }


   

    
})(jQuery);                            








