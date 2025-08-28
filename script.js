// Update the displayed value as the slider moves
document.addEventListener('DOMContentLoaded', function() {
	const slider = document.getElementById('commute-distance');
	const valueDisplay = document.getElementById('distance-value');
	if (slider && valueDisplay) {
		function updateValue() {
			valueDisplay.textContent = slider.value + ' miles';
		}
		slider.addEventListener('input', updateValue);
		updateValue(); // Set initial value
	}
});

// Make button backgrounds in nav only stay #44FF00 when selected
const navButtons = document.querySelectorAll('nav button');
navButtons.forEach(button => {
	button.addEventListener('click', () => {
		navButtons.forEach(btn => btn.style.backgroundColor = '#60C13D');
		button.style.backgroundColor = '#44FF00';
	});
});