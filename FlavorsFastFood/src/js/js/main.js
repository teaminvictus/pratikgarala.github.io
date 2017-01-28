(function($) {
    "use strict"; // Start of use strict

    $(function(event){
        $('#portfolio').mixitup({
            targetSelector: '.item',
            transitionSpeed: 350
        });
    });

    // $('document').on('scroll',function (event) {
    //     var scrollPosition = $(document).scrollTop;
    //     $('nav li a').each(function (event) {
    //         var currentLink = $(this);
    //         var refElement = $(currentLink.attr("href"));
    //         if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
    //             $('ul.nav li a').removeClass("navactive");
    //             currentLink.addClass("navactive");
    //         }
    //         else{
    //             currentLink.removeClass("navactive");
    //         }
    //     });
    // });

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');

        $('ul li a').removeClass()
        event.preventDefault();
    });

    // // Highlight the top nav as scrolling occurs
    // $('body').scrollspy({
    //     target: '.navbar-fixed-top',
    //     offset: 51
    // });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });

    // Floating label headings for the contact form
    $(function() {
        $("body").on("input propertychange", ".floating-label-form-group", function(e) {
            $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
        }).on("focus", ".floating-label-form-group", function() {
            $(this).addClass("floating-label-form-group-with-focus");
        }).on("blur", ".floating-label-form-group", function() {
            $(this).removeClass("floating-label-form-group-with-focus");
        });
    });


})(jQuery); // End of use strict
