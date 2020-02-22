('use strict');
// SLIDER CASES
const sliderContainer = document.querySelector('.slider-container');
const sliderList = document.querySelector('.slider-list');
const sliderItem = document.querySelectorAll('.slider-item');
let sliderListWidth = null;

// CAPITURANDO LARGURA
const containerWidth = sliderContainer.parentElement.offsetWidth - 30;
sliderContainer.style.width = `${containerWidth}px`;

for (let i = 0; i < sliderItem.length; i++) {
	sliderItem[i].style.width = `${containerWidth}px`;

	let sliderItemWidth = sliderItem[i].offsetWidth;
	sliderListWidth += sliderItemWidth;
}

sliderList.style.width = `${sliderListWidth}px`;

// ANIMAÇÃO SLIDER
const prv = document.querySelector('.item-prv');
const nxt = document.querySelector('.item-nxt');
let sliderPos = 0;

nxt.addEventListener('click', () => {
	let lastItem = sliderListWidth - containerWidth;
	if (-1 * sliderPos === lastItem) {
		return;
	}
	sliderPos -= containerWidth;
	anime({
		targets: sliderList,
		translateX: sliderPos
	});
});

prv.addEventListener('click', () => {
	if (sliderPos === 0) {
		return;
	}
	sliderPos += containerWidth;
	anime({
		targets: sliderList,
		translateX: sliderPos
	});
});
