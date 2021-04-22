$(function(){
	'use strict';

	// preloader
    $(".preloader").fadeOut();

	// sidebar
	$('.side-left').sidenav();

	// collapse
	$('.collapsible').collapsible();

	// slider
	$('.slide-show').owlCarousel({
		items: 1,
        margin: 5
	});

	// category
	$('.category-show').owlCarousel({
		items: 2,
        margin: 10,
        dots: false,
       	margin: 10,
       	stagePadding: 20,
       	loop: false
	});

	// tabs
	$('.tabs').tabs();

	// testimonial
	$('.testimonial-show').owlCarousel({
		items: 1,
        margin: 10
	});

});



function myFunction() {
	var y = document.getElementById("btn");
	var x = document.getElementById("btn2");
	if (y.style.display === "none") {

	} else {
		y.style.display = "none";
		x.style.display = "flex";
	}
}

function increase() {
	var oldVal = document.getElementById("val").innerHTML;
	var newVal = parseInt(oldVal) + 1;
	document.getElementById("val").innerHTML = newVal;
}
function decrease() {
	var oldVal = document.getElementById("val").innerHTML;
	if (oldVal > 1) {
		var oldVal = document.getElementById("val").innerHTML;
		var oldVal = parseInt(oldVal) - 1;
		document.getElementById("val").innerHTML = oldVal;
	}
	else if (oldVal > 1 || oldVal > 0) {
		var oldVal = document.getElementById("val").innerHTML;
		var oldVal = parseInt(oldVal) - 1;
		document.getElementById("val").innerHTML = oldVal;
	}
}
function myFunction1() {
	var oldVal = document.getElementById("val").innerHTML;
	if (oldVal == 0) {
		var y = document.getElementById("btn");
		var x = document.getElementById("btn2");
		var oldVal = parseInt(oldVal) + 1;
		document.getElementById("val").innerHTML = oldVal;
		if (y.style.display === "block") {

		} else {
			y.style.display = "block";
			x.style.display = "none";
		}
	}
}




