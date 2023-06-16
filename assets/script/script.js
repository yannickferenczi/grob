M.textareaAutoResize($('#text-input'));
output = document.getElementById('output');

function submitText() {
    input = textInput.value;
    rawWords = input.split(" ");
    processedWords = [];

    for (word in rawWords) {
        text = rawWords[word];
        lowerText = text.toLowerCase();
        processedText = lowerText.replace(/[\.,?!]/g, "");
        processedWords.push(processedText);
    }

    for (word in processedWords) {
        const regexManStart = /^man/;
        const regexManEnd = /man$/;
        const familyTerms = ['father', 'mother', 'sister', 'brother', 'daughter', 'son'];

        if (regexManStart.test(processedWords[word])) {
            output.innerHTML += `- ${processedWords[word]} starts with 'man'<br>`;
        }
        if (regexManEnd.test(processedWords[word])) {
            output.innerHTML += `- ${processedWords[word]} ends in 'man'<br>`;
        }
        if (familyTerms.includes(processedWords[word])) {
            output.innerHTML += `- ${processedWords[word]} is a gendered family term<br>`;
        }

    }
}

button = document.getElementById('submit-button');
button.addEventListener("click", submitText);

textInput = document.getElementById('text-input');