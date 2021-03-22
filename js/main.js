document.addEventListener( 'DOMContentLoaded', function () {
	var sliderText = new Splide( '.header-slider-text', {
		type: 'fade',
		perPage: 1,
		gap: 0,
		padding: 0,
		rewind: true,
		pagination: false,
		arrows: false,
	} ).mount();
	var sliderImage = new Splide( '.header-slider-image', {
		classes: {
			arrows: 'splide__arrows header-arrows',
			arrow: 'splide__arrow header-arrow',
			prev: 'splide__arrow--prev header-arrow-prev',
			next: 'splide__arrow--next header-arrow-next',
			pagination: 'splide__pagination header-pagination',
			page: 'splide__pagination__page header-pagination-dot'
		},
		arrows: true,
		type: 'loop',
		perPage: 1,
		rewind: true,
		pagination: true
	} );
	
	sliderImage.sync( sliderText ).mount();
} );

function nextClick() {
	document.getElementById("next-slideshow").click();
	document.getElementById("next-slider").click();
}