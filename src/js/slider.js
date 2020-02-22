('use strict');
// SLIDER CASES
const sliderContainer = document.querySelector('.slider-container');
const sliderList = document.querySelector('.slider-list');
const sliderItem = document.querySelectorAll('.slider-item');
const sliderTotalItem = sliderItem.length - 1;
let sliderListWidth = null;
const containerWidth = sliderContainer.parentElement.offsetWidth - 30;
const prv = document.querySelector('.item-prv');
const nxt = document.querySelector('.item-nxt');
const currentSlide = document.querySelector('.current-slide');
const totalSlide = document.querySelector('.total-slide');
let currentCounter = 0;
const navItems = document.querySelectorAll('.item-navigator a');
const navCounter = document.querySelector('.navigator-counter span');

// CAPITURANDO LARGURA
sliderContainer.style.width = `${containerWidth}px`;

for (let i = 0; i < sliderItem.length; i++) {
	sliderItem[i].style.width = `${containerWidth}px`;

	let sliderItemWidth = sliderItem[i].offsetWidth;
	sliderListWidth += sliderItemWidth;
}

sliderList.style.width = `${sliderListWidth}px`;

// ANIMAÇÃO SLIDER
let sliderPos = 0;

const nxtSlideAnim = () => {
	let lastItem = sliderListWidth - containerWidth;
	if (-1 * sliderPos === lastItem) {
		return;
	}
	sliderPos -= containerWidth;
	anime({
		targets: sliderList,
		translateX: sliderPos
	});
};

const prvSlideAnim = () => {
	if (sliderPos === 0) {
		return;
	}
	sliderPos += containerWidth;
	anime({
		targets: sliderList,
		translateX: sliderPos
	});
};

const counterFormatter = (number) => {
	if (number < 10) {
		return `0${number}`;
	} else {
		return number;
	}
};

const counterAdd = () => {
	if (currentCounter >= 0 && currentCounter < sliderTotalItem) {
		currentCounter++;
		currentSlide.innerHTML = counterFormatter(currentCounter);
		navCounter.innerHTML = counterFormatter(currentCounter);
	}
};

const counterRemove = () => {
	if (currentCounter > 0 && currentCounter <= sliderTotalItem) {
		currentCounter--;
		currentSlide.innerHTML = counterFormatter(currentCounter);
		navCounter.innerHTML = counterFormatter(currentCounter);
	}
};

const setActiveNav = () => {
	for (let i = 0; i < navItems.length; i++) {
		let myNavNumber = parseInt(navItems[i].getAttribute('data-nav'));
		if (myNavNumber === currentCounter) {
			navItems[i].classList.add('item-active');
			anime({
				targets: '.item-active',
				width: 80
			});
		}
	}
};

const changeActive = () => {
	for (let i = 0; i < navItems.length; i++) {
		anime({
			targets: '.item-active',
			width: 40
		});
		navItems[i].classList.remove('item-active');
	}
	setActiveNav();
};

//AÇÕES
totalSlide.innerHTML = counterFormatter(sliderTotalItem);
anime({
	targets: '.item-active',
	width: 80
});

nxt.addEventListener('click', () => {
	nxtSlideAnim();
	counterAdd();
	changeActive();
});

prv.addEventListener('click', () => {
	prvSlideAnim();
	counterRemove();
	changeActive();
});
