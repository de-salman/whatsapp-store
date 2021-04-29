$(function () {
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





// alert on checkout

function validation() {

	var x = document.getElementById('input_text').value
	var y = document.getElementById('input_text1').value
	if (y == "") {
		alert("please fill the name");
		return false;
	}
	else if (x == '') {
		alert("please fill the address");
		return false;
	}
}




// cart 




if (document.readyState == 'loading') {
	document.addEventListener('DOMContentLoaded', ready)
} else {
	ready()
}

function ready() {

	var removeCartItemButtons = document.getElementsByClassName('fa-remove')
	for (var i = 0; i < removeCartItemButtons.length; i++) {
		var button = removeCartItemButtons[i]
		button.addEventListener('click', removeCartItem)
	}

	var quantityInputs = document.getElementsByClassName('cart-quantity-input')
	for (var i = 0; i < quantityInputs.length; i++) {
		var input = quantityInputs[i]
		input.addEventListener('change', quantityChanged)
	}

	var addToCartButtons = document.getElementsByClassName('add-to-cart')
	for (var i = 0; i < addToCartButtons.length; i++) {
		var button = addToCartButtons[i]
		button.addEventListener('click', addToCartClicked)
	}

	updateCartTotal()

}


function removeCartItem(event) {
	var buttonClicked = event.target
	buttonClicked.parentElement.parentElement.parentElement.parentElement.parentElement.remove()
	updateCartTotal()
}

function quantityChanged(event) {
	var input = event.target
	if (isNaN(input.value) || input.value <= 0) {
		input.value = 1
	}
	updateCartTotal()
}


function addToCartClicked(event) {
	var button = event.target
	var shopItem = button.parentElement.parentElement
	var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
	var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
	// var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
	// addItemToCart(title, price, imageSrc)
	// updateCartTotal()
}


// function addItemToCart(title, price, imageSrc) {
// 	var cartRow = document.createElement('div')
// 	cartRow.classList.add('content')
// 	var cartItems = document.getElementsByClassName('simple')[0]
// 	var cartItemNames = cartItems.getElementsByClassName('cart-item-title')

// 	for (var i = 0; i < cartItemNames.length; i++) {
// 		if (cartItemNames[i].innerText == title) {
// 			alert('This item is already added to the cart')
// 			return
// 		}
// 	}

// 	var cartRowContents = `
// 			<div class="row">
// 				<div class="col s4 m3">
// 					<div class="wrap-image">
// 						<img src="${imageSrc}" alt="">
// 					</div>
// 				</div>
// 				<div class="col s7 m8">
// 					<div class="wrap-name">
// 						<a class="cart-item-title" href="#">${title}</a>
// 					</div>
// 				</div>
// 				<div class="col s1">
// 					<div class="icon-remove">
// 						<a href="#">
// 							<i class="fa fa-remove"></i>
// 						</a>
// 					</div>
// 				</div>
// 				<div class="col s4">
// 					<div class="wrap-price">
// 						<p>Price</p>
// 					</div>
// 				</div>
// 				<div class="col s4">
// 					<div class="wrap-price">
// 						<p class="price">${price}}</p>
// 					</div>
// 				</div>
// 				<div class="col s4">
// 					<div class="wrap-quality">
// 						<p>Quality</p>
// 					</div>
// 				</div>
// 				<div class="col s4">
// 					<div class="wrap-quality">
// 						<input class="cart-quantity-input" type="number" value="1">
// 					</div>
// 				</div>
// 			</div>`
// 	cartRow.innerHTML = cartRowContents
// 	cartItems.append(cartRow)
// 	cartRow.getElementsByClassName('fa-remove')[0].addEventListener('click', removeCartItem)
// 	cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
// }


function updateCartTotal() {
	var cartItemContainer = document.getElementsByClassName('wrap-cart')[0]
	var cartRows = cartItemContainer.getElementsByClassName('content')
	var total = 0
	for (var i = 0; i < cartRows.length; i++) {
		var cartRow = cartRows[i]
		var priceElement = cartRow.getElementsByClassName('price')[0]
		var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
		var price = parseFloat(priceElement.innerText.replace('$', ''))
		var quantity = quantityElement.value
		total = total + (price * quantity)
	}
	total = Math.round(total * 100) / 100
	document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}










var add2cart = document.getElementsByClassName('add-to-cart')
for (var i = 0; i < add2cart.length; i++) {
	var button = add2cart[i];
	button.addEventListener('click', function () {
		targetElement = event.target;
		if (targetElement) {
			targetElement.style.display = 'none';
			nextbutton = targetElement.nextElementSibling;
			nextbutton.style.display = 'table';
		}
	})
}

var decrease = document.getElementsByClassName('decrease')
for (var i = 0; i < decrease.length; i++) {
	var button = decrease[i];
	button.addEventListener('click', function () {
		targetElement = event.target;
		nextElement = targetElement.nextElementSibling;
		if (targetElement && nextElement.innerHTML > 1) {
			nextElement.innerHTML = parseInt(nextElement.innerHTML) - 1
		}
		else if (targetElement && nextElement.innerHTML == 1) {
			parentElement = targetElement.parentElement;
			previousElement = parentElement.previousElementSibling;
			previousElement.style.display = "block"
			targetElement.parentElement.style.display = 'none';

		}
	})
}


var increase = document.getElementsByClassName('increase')
for (var i = 0; i < increase.length; i++) {
	var button = increase[i];
	button.addEventListener('click', function () {
		targetElement = event.target;
		previousElement = targetElement.previousElementSibling;
		if (targetElement) {
			previousElement.innerHTML = parseInt(previousElement.innerHTML) + 1
		}
	})
}

