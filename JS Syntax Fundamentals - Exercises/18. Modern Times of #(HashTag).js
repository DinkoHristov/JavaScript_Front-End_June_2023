function specialWords(text) {
    let myText = text.split(" ");
    const regexLiteral = /\#[A-Za-z]+\b/;

    let validWords = [];
    for (let i = 0; i < myText.length; i++) {
        let currWord = myText[i];

        if (currWord.match(regexLiteral)) {
            validWords.push(currWord.substring(1));
        }
    }

    validWords.forEach(word => {
        console.log(word);
    });
}

specialWords('Nowadays everyone uses # to tag a #special2 word in #socialMedia');