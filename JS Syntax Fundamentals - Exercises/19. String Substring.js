function comparison(word, text) {
    
    let words = text.split(" ");

    let isFound = false;
    for (let i = 0; i < words.length; i++) {
        if (words[i].toLowerCase() === word.toLowerCase()) {
            isFound = true;
            break;
        }
    }

    if (isFound) {
        console.log(word.toLowerCase());
    } else {
        console.log(`${word} not found!`)
    }
}

comparison('javaScript', 'JavaScript is the best programming language');