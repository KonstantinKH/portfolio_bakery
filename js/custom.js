$(document).ready(function(){

	
	/*     loader    */

	$(window).load(function() {

		$(".loader_inner").fadeOut();
		$(".loader").delay(400).fadeOut("slow");



	}); // load


	// menu button


	$(".toggle-button").click(function(){

		$("header nav").toggleClass("active-menu");
	});

	$(".toggle-button").click(function() {

	  $(".sandwich").toggleClass("active");

	});




	/*    slick slider    */

	$(".section-2__slider").slick({

	//normal options...
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 1,

	  // the magic
	 responsive: [{

	      breakpoint: 480,
	      settings: {
	        slidesToShow: 2,
	      }

	    }]

	});//slick


/*   fixed header     */


$(document).scroll(function(){


var scrollTop = $(document).scrollTop();

	if( scrollTop > 100 ){
		$(".header-wrap").addClass("fixHead");
	}
	else{
		$(".header-wrap").removeClass("fixHead");
	}
});







}); // ready()






