('use strict');
const navIcon = document.querySelector('.icon-menu');
const sidebar = document.querySelector('.sidebar');

navIcon.addEventListener('click', () => {
	sidebar.classList.toggle('open');
});
