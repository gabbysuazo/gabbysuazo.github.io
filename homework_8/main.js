// Header Scroll
$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".header").addClass("active");
            $(".g").addClass("black-stroke");
            $(".line").addClass("black-stroke");
            $("#black-fill").addClass("black-fill");
            $("#black-stroke").addClass("black-stroke");
            $("#header-eye").attr("src", "images/lusid-eye-black.svg");
            $(".device-only-arrow").addClass("arrow-none");
            $("#footer-logo").attr("src", "images/lusid-logo-black.svg");
            $("#footer-ig").addClass("black-fill");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".header").removeClass("active");
           $(".g").removeClass("black-stroke");
           $(".line").removeClass("black-stroke");
           $("#black-fill").removeClass("black-fill");
           $("#black-stroke").removeClass("black-stroke");
           $("#header-eye").attr("src", "images/lusid-eye.svg");
           $(".device-only-arrow").removeClass("arrow-none");
           $("#footer-logo").attr("src", "images/lusid-logo-white.svg");
           $("#footer-ig").removeClass("black-fill");
        }
    });

    $(document).on("click", function() {
        if ($('#menu-checkbox').prop('checked') == true) {

            $("#menu").addClass("active");

            $('#menu').css({
                '-webkit-transform' : 'translate(0, 0)',
                '-moz-transform'    : 'translate(0, 0)',
                '-ms-transform'     : 'translate(0, 0)',
                '-o-transform'      : 'translate(0, 0)',
                'transform'         : 'translate(0, 0)'
            })
        } if ($('#menu-checkbox').prop('checked') == false) {

            $("#menu").removeClass("active");


            $('#menu').css({
                '-webkit-transform' : 'translate(0, -100%)',
                '-moz-transform'    : 'translate(0, -100%)',
                '-ms-transform'     : 'translate(0, -100%',
                '-o-transform'      : 'translate(0, -100%)',
                'transform'         : 'translate(0, -100%)'
            })
        } else {
            return;
        }
    });

    $(document).on("click", function() {
        if ($('#menu-checkbox').prop('checked') == true) {
            $('#desktop-menu').css({
                '-webkit-transform' : 'translate(0, 0)',
                '-moz-transform'    : 'translate(0, 0)',
                '-ms-transform'     : 'translate(0, 0)',
                '-o-transform'      : 'translate(0, 0)',
                'transform'         : 'translate(0, 0)'
            })
        } if ($('#menu-checkbox').prop('checked') == false) {
            $('#desktop-menu').css({
                '-webkit-transform' : 'translate(-100%, 0)',
                '-moz-transform'    : 'translate(-100%, 0)',
                '-ms-transform'     : 'translate(-100%, 0',
                '-o-transform'      : 'translate(-100%, 0)',
                'transform'         : 'translate(-100%, 0)'
            })
        } else {
            return;
        }
    });

    $("#close-menu").on("click", function() {
        $('#menu-checkbox').prop('checked', false);
    });

    $(window).click(function() {
        $('#menu-checkbox').prop('checked', false);
    });
        
    $('#menu-nav').click(function(event){
        event.stopPropagation();
    });
    
});