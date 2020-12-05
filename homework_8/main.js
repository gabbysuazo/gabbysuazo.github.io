// Header Scroll
$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".header").addClass("active");
            $("g").addClass("black-stroke");
            $("line").addClass("black-stroke");
            $("#black-fill").addClass("black-fill");
            $("#black-stroke").addClass("black-stroke");
            $("#header-eye").attr("src", "images/lusid-eye-black.svg");
            $(".device-only-arrow").addClass("arrow-none");
            $("#footer-logo").attr("src", "images/lusid-logo-black.svg");
            $("#footer-ig").addClass("black-fill");
        } else {
           $(".header").removeClass("active");
           $("g").removeClass("black-stroke");
           $("line").removeClass("black-stroke");
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
            $('#menu').css({
                '-webkit-transform' : 'translate(0, 328%)',
                '-moz-transform'    : 'translate(0 328%)',
                '-ms-transform'     : 'translate(0, 328%)',
                '-o-transform'      : 'translate(0, 328%)',
                'transform'         : 'translate(0, 328%)'
            })
        } if ($('#menu-checkbox').prop('checked') == false) {
            $('#menu').css({
                '-webkit-transform' : 'translate(0, 450%)',
                '-moz-transform'    : 'translate(-0, 450%)',
                '-ms-transform'     : 'translate(0, 450%',
                '-o-transform'      : 'translate(0, 450%)',
                'transform'         : 'translate(0, 450%)'
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