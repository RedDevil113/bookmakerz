$(document).ready(function(){

	//mob menu
	$('.menu-bar').on('click', function(){
		$('.header').toggleClass('open-menu');
		$('.header-nav').slideToggle();
	});

	$('.sidebar-bookmakersRating__toggle').on('click', function(){
		$(this).toggleClass('toggle-active');
	});

	$('.sidebar-bookmakersRating__title').on('click', function(){
		$('.sidebar-bookmakersRating__row').toggleClass('filter-open');
		$(this).toggleClass('sidebar-title__active');
	});
	
});