// PRELOADER
window.addEventListener('load', () => {
	const pagePreloader = document.querySelector('.preloader');
	pagePreloader.classList.add('fade-out');
	setTimeout(() => {
		pagePreloader.style.display = 'none';
	}, 2500);
});
