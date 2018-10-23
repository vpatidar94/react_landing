/******** One page scroll animation *************/
$(document).on("scroll", onScroll);
$('.links_anchor a[href^="#"]').on('click', function (e) {
	e.preventDefault();
    $(document).off("scroll");
    
    $('a').each(function () {
        $(this).removeClass('active');
    })
    $(this).addClass('active');
  
    var target = this.hash,
        menu = target;
	$target = $(target);
   $('html, body').stop().animate({
        'scrollTop': $target.offset().top+2
    }, 600, 'swing', function () {
        //window.location.hash = target;
        $(document).on("scroll", onScroll);
    });
});

function onScroll(event){
	var scrollPos = $(document).scrollTop();

	$('#myNavbar a').each(function () {
	    var currLink = $(this);
		var refElement = $(currLink.attr("href"));
	    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
	        $('#myNavbar ul li a').removeClass("active");
	        currLink.addClass("active");
	    }
	    else{
	        currLink.removeClass("active");
	    }
	});
}


/***** Custom tab with inner slider ********/
$('ul.tabs li').click(function(e){
var tab_id = $(this).attr('data-tab');

$('ul.tabs li').removeClass('current');
$('.tab-content').removeClass('current');

$(this).addClass('current');
$("#"+tab_id).addClass('current');
$('.platform_slider').slick('setPosition', 0);
$('.platform_slider').resize();
})

$(document).ready(function(){

$('.platform_slider').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true
      }
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      }
    }
  ]
});

/****** Toggle Menu ********/
$(".menu-opener").click(function(){
	$(".menu-opener, .menu-opener-inner, #myNavbar").toggleClass("open_menu");
});


/****** Sticky header *********/
$(window).scroll(function() {
	if ($(this).scrollTop() > 1){  
	    $('#header').addClass("sticky");
	  }
	  else{
	    $('#header').removeClass("sticky");
	  }
});


});