// Pre-selected words and their alternatives
const words = {
	"Lorem": "Ipsum",
	"dolor": "sit",
	"amet": "consectetur",
	"adipiscing": "elit"
};

function highlightWords() {
	// Get the input text
	let inputText = document.getElementById("text").value;

	// Loop through each pre-selected word and highlight it
	Object.keys(words).forEach(function(word) {
		let regex = new RegExp(word, "gi");
		inputText = inputText.replace(regex, `<span class="highlight">${word}</span>`);
	});

	// Display the highlighted text
	document.getElementById("output").innerHTML = inputText;
}

function replaceWords() {
	// Get the input text
	let inputText = document.getElementById("text").value;

	// Loop through each pre-selected word and replace it with the alternative word
	Object.keys(words).forEach(function(word) {
		let regex = new RegExp(word, "gi");
		inputText = inputText.replace(regex, `<span class="highlight">${words[word]}</span>`);
	});

	// Display the replaced text
	document.getElementById("output").innerHTML = inputText;
}