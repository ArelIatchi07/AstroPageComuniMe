document.addEventListener('wheel', (event) => {
	event.preventDefault();
	const delta = Math.sign(event.deltaY);
	if (delta > 0) {
		scrollToNextSection();
	} else {
		scrollToPreviousSection();
	}
}, { passive: false });

function scrollToNextSection() {
	const sections = document.querySelectorAll('.section');
	let currentSectionIndex = getCurrentSectionIndex(sections);

	// Si no se encuentra la sección actual, selecciona la primera
	if (currentSectionIndex === -1) {
		currentSectionIndex = 0;
	}

	// Desplázate a la siguiente sección si existe
	if (currentSectionIndex < sections.length - 1) {
		sections[currentSectionIndex + 1].scrollIntoView({ behavior: 'smooth' });
	}
}

function scrollToPreviousSection() {
	const sections = document.querySelectorAll('.section');
	let currentSectionIndex = getCurrentSectionIndex(sections);

	// Desplázate a la sección anterior si existe
	if (currentSectionIndex > 0) {
		sections[currentSectionIndex - 1].scrollIntoView({ behavior: 'smooth' });
	}
}

function getCurrentSectionIndex(sections) {
	let currentSectionIndex = -1;

	// Encuentra el índice de la sección que está en la vista
	sections.forEach((section, index) => {
		const rect = section.getBoundingClientRect();
		if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
			currentSectionIndex = index;
		}
	});

	return currentSectionIndex;
}
