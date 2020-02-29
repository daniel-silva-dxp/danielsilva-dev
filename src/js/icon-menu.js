('use strict');
const menuIcon = document.querySelector('.icon-menu');
const sidebar = document.querySelector('.sidebar');

menuIcon.addEventListener('click', function() {
	this.classList.toggle('clicked');
	sidebar.classList.toggle('open');
});
