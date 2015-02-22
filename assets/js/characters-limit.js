(function () {
	'use strict';

	var textArea = document.querySelector('.message-content');
	var textAreaCounter = document.querySelector('.message-counter');
	var sendMessage = document.querySelector('.message-send');

	function countChars (element, max) {
		var numberOfChars = element.value.length; // Get the number of characters typed in the <textarea>.
		var counter = max - numberOfChars; // Counter for the number of characters.
		textAreaCounter.innerHTML = counter; // Update the counter when the user add or delete some characters.
		/*
		 * If the max number of characters is exceeded, disable the submit input and change the colour of the counter.
		 * Else, enable the submit input and set the colour of the counter to its initial value.
		 */
		if (counter < 0) {
			textAreaCounter.classList.add('message-counter--warning');
			sendMessage.setAttribute('disabled', 'disabled');
		} else {
			textAreaCounter.classList.remove('message-counter--warning');
			sendMessage.removeAttribute('disabled');
		}
	}

	// When the user released a key, run countChars function.
	textArea.addEventListener('keyup', function () {
		countChars(textArea, 150);
	});

})();
