$(document).ready(function () {

    $('.owl-carousel').owlCarousel({

        items: 1,
        nav: true,
        loop: true,

        navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]

    });

   /* $( ".owl-prev").html('<i class="fa fa-chevron-left"></i>');
    $( ".owl-next").html('<i class="fa fa-chevron-right"></i>');*/


    // Add scrollspy to <body>
    $('body').scrollspy({target: ".navbar", offset: 70});


    // Add smooth scrolling on all links inside the navbar
    $("#myNavbar a").on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;

            });
            $(".navbar-collapse").collapse('hide');
        }  // End if
    });

});

$(window).on('activate.bs.scrollspy', function (e) {
    history.replaceState({}, "", $("a[href^='#']", e.target).attr("href"));
});