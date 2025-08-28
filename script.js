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

// Use a class for selection so hover works on unselected buttons
const navButtons = document.querySelectorAll('nav button');
navButtons.forEach(button => {
	button.addEventListener('click', () => {
		navButtons.forEach(btn => btn.classList.remove('selected'));
		button.classList.add('selected');
	});
});