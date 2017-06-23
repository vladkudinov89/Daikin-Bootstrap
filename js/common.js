
/*Commom script*/

;(function () {

    $(window).on('activate.bs.scrollspy', function (e) {
        history.replaceState({}, "", $("a[href^='#']", e.target).attr("href"));
    });

    $(document).ready(function () {

        $('#showroom .owl-carousel').owlCarousel({

            items: 1,
            nav: true,
            loop: true,
            dots: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]

        });

        $('#comments .owl-carousel').owlCarousel({

            items: 2,
            nav: true,
            loop: true,
            dots: true,
            margin : 120,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],

            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 1
                },
                // breakpoint from 480 up
                480: {
                    items: 1
                },
                // breakpoint from 768 up
                768: {
                    items: 2,
                    margin : 80
                }

            }
        });

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

        /*Animation START*/
        $(".production li").animated(" bounceInUp");
        $(".why-we li").animated("bounceInUp");
        /*Animation END*/

        $("input[name='phone']").mask("+38(099) 999-99-99");

        //Аякс отправка форм
        //Документация: http://api.jquery.com/jquery.ajax/
        $(".form").submit(function() {
            $.ajax({
                type: "POST",
                url: "../mail.php",
                data: $(this).serialize()
            }).done(function() {
                alert("Спасибо за заявку!");
                setTimeout(function() {

                }, 1000);
            });
            return false;
        });


    });


})();
