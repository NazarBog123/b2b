// Smooth Scroll
const smoothLinks = document.querySelectorAll('a[data-smooth="smooth"]');
for (let smoothLink of smoothLinks) {
	smoothLink.addEventListener('click', function (e) {
		e.preventDefault();
		const id = smoothLink.getAttribute('href');
		document.querySelector(id).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	});
};
// Smooth Scroll //

if (document.querySelector('.faq-acc__btn')) {
	const accBtn = document.querySelectorAll('.faq-acc__btn');
	const accItem = document.querySelectorAll('.faq-acc__item');

	for (const item of accItem) {
		const btn = item.querySelector('button');
		item.setAttribute('data-height', item.clientHeight)
		item.style.height = `${btn.clientHeight + 1}px`;
	}

	for (const btn of accBtn) {
		btn.addEventListener('click', () => {
			if (btn.classList.contains('active')) {
				const item = btn.parentNode;
				item.style.height = `${btn.clientHeight + 1}px`;
				btn.classList.remove('active');
			} else {
				for (const item2 of accItem) {
					const btn2 = item2.querySelector('button');
					btn2.classList.remove('active');
					item2.style.height = `${btn2.clientHeight + 1}px`;
				}
				const item = btn.parentNode;
				item.style.height = `${item.getAttribute('data-height')}px`;
				btn.classList.add('active');
			}
		});
	}
}