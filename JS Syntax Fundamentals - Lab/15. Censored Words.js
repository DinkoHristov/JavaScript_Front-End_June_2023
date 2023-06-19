function censoredWords(text, word) {
    let censoredText = text;
    let replacement = "";

    for (let i = 0; i < word.length; i++) {
        replacement += '*';
    }

    while (censoredText.includes(word)) {
        censoredText = censoredText.replace(word, replacement);
    }

    console.log(censoredText);
}

censoredWords('A small sentence with some small words', 'small');