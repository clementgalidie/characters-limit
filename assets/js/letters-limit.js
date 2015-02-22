(function () {
	'use strict';

	var textArea = document.querySelector('.message-content');
	var textAreaCounter = document.querySelector('.message-counter');
	var sendMessage = document.querySelector('.message-send');

	var countChars = function () {
		var numberOfChars = this.value.length; // Get the number of characters typed in the <textarea>.
		var max = 150 - numberOfChars; // Counter for the number of characters.
		textAreaCounter.innerHTML = max; // Update the counter when the user add or delete some characters.
		/*
		 * If the max number of characters is exceeded, disable the submit input and change the colour of the counter.
		 * Else, enable the submit input and set the colour of the counter to its initial value.
		 */
		if (max < 0) {
			textAreaCounter.classList.add('message-counter--warning');
			sendMessage.setAttribute('disabled', 'disabled');
		} else {
			textAreaCounter.classList.remove('message-counter--warning');
			sendMessage.removeAttribute('disabled');
		}
	}

	// When the user released a key, run countChars function.
	textArea.addEventListener('keyup', countChars);

})();
