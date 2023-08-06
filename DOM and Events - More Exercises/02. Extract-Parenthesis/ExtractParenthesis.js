function extract(content) {
    const givenText = document.getElementById("content").textContent;
    const searchedWords = [];

    for (let i = 0; i < givenText.length; i++) {
        let currChar = givenText[i];
        let word = "";

        if (currChar === "(") {
            for (let j = i + 1; j < givenText.length; j++) {
                let current = givenText[j];

                if (current === ")") {
                    i = j;
                    searchedWords.push(word);
                    break;
                } else {
                    word += givenText[j];
                }
            }
        }
    }

    return searchedWords.join("; ");
}