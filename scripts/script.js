// Define the words object
let words = {};

// Fetch the words from the text file
fetch('./assets/data/words.txt')
  .then(response => response.text())
  .then(text => {
    // Split the text into lines and create the words object
    text.split('\n').forEach(line => {
      let [key, value] = line.split(':');
      words[key] = value.trim();
    });
  });

const textArea = document.getElementById('text');
const outputDiv = document.getElementById('output');
const errorMessage = document.getElementById("err-message");
const resultMessage = document.getElementById("message");

function highlightWords() {
	// Get the input text
	let inputText = document.getElementById("text").value;

	
	  // Check if the input text is empty
	if (inputText.trim() === "") {
        // Show an error message
		document.getElementById("err-message").innerHTML = "Please enter some text before highlighting!";
		
		setTimeout(function() {
			document.getElementById("err-message").innerHTML = "";
		  }, 5000);
		  return;	
    }

	//enable contenteditable attribute on outputDiv
	else{
		outputDiv.setAttribute('contenteditable', true);
	}

	// Loop through each pre-selected word and highlight it
	Object.keys(words).forEach(function(word) {
		let regex = new RegExp(word, "gi");
		inputText = inputText.replace(regex, `<span class="highlight1">${word}</span>`);
	});

	// Display the highlighted text
	document.getElementById("output").innerHTML = inputText;

	// Display message
	 document.getElementById("message").innerHTML = "Words highlighted!";
}

	// Add event listener to remove error message when user types in textarea
	textArea.addEventListener("input", function() {
	errorMessage.innerHTML = "";
  	});

function replaceWords() {
	// Get the input text
	let inputText = document.getElementById("text").value;

	if (inputText.trim() === "") {
        // Show an error message
		document.getElementById("err-message2").innerHTML = "No output found!";
		
		setTimeout(function() {
			document.getElementById("err-message2").innerHTML = "";
		  }, 3000);
		  return;	
    }
	// Loop through each pre-selected word and replace it with the alternative word
	Object.keys(words).forEach(function(word) {
		let regex = new RegExp(word, "gi");
		inputText = inputText.replace(regex, `<span class="highlight2">${words[word]}</span>`);
	});

	// Display the replaced text
	document.getElementById("output").innerHTML = inputText;

	//Display message
	document.getElementById("message").innerHTML = "Words replaced!";

	// Show the copy button if there is content in the output div
	let copyBtn = document.getElementById("copyBtn");

	if (document.getElementById("output").innerHTML.trim() !== "") {
		copyBtn.style.display = "block";

	} else {
		copyBtn.style.display = "none";
	}
}

function copyText() {
    let outputText = document.getElementById("output").innerText;
    if (outputText === '') {
        alert("No text to copy!");
    } else {
        let temp = document.createElement("textarea");
        temp.value = outputText;
        document.body.appendChild(temp);
        temp.select();
        document.execCommand("copy");
        document.body.removeChild(temp);
        alert("Text copied to clipboard!");
    }
}

function resetText() {
	// Hide the "Copy Text" button
	document.getElementById("copyBtn").style.display = "none";

	// Remove error message
	errorMessage.innerHTML = "";

	 // Clear text area
	 textArea.value = "";

	// clear output area
	document.getElementById("output").innerHTML = "";


	 // disable contenteditable attribute on outputDiv
	 document.getElementById("output").removeAttribute("contenteditable")

	//Display message
	document.getElementById("message").innerHTML = "All cleared!";

	// Delay hiding the message for 2 seconds
    setTimeout(function() {
        document.getElementById("message").innerHTML = "";
    }, 2000);

}
