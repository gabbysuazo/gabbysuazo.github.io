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


    $(window).on("scroll", function() {
        if($(window).scrollTop() < 45) {
            $(".product-buttons").addClass("fixed-product-buttons");
        } else {
            $(".product-buttons").removeClass("fixed-product-buttons");
        }
    });
    
});


// Size Dropdown

var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);