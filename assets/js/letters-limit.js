(function () {
	"use strict";

	var textArea = document.getElementById("message");
	var textAreaCounter = document.querySelector(".message-lettersCounter");
	var maxLettersNumber = "150" // Set the maximum number of letters user can write.

	// Function to count the number of letters.
	var countLetters = function () {
		maxLettersNumber--;
		textAreaCounter.textContent = maxLettersNumber;

		// If the user has written more than 150 characters, then disable textarea.
		if (maxLettersNumber < 0) {
			textArea.setAttribute("disabled", "disabled");
			textAreaCounter.textContent = 0;
		}
	}

	// When someone is writting something in the textarea, call countLetters().
	textArea.addEventListener("keydown", countLetters);
}());