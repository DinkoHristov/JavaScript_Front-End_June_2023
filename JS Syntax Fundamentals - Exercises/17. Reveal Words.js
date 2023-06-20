function revealWords(input, text) {
    let words = input.split(", ");

    for (let w = 0; w < words.length; w++) {
        let word = words[w];
        let length = word.length;

        let signWord = "";
        for (let i = 0; i < length; i++) {
            signWord += '*';
        }

        text = text.replace(signWord, word);
    }

    console.log(text);
}

revealWords('great, learning',
'softuni is ***** place for ******** new programming languages');