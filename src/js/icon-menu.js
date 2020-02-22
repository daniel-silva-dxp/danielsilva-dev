('use strict');
const menuIcon = document.querySelector('.icon-menu');

menuIcon.addEventListener('click', function() {
	this.classList.toggle('clicked');
});
