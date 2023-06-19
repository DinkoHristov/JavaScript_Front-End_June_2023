function countOccurrences(text, word) {
    let splittedText = text.split(' ');
    
    let count = 0;
    for (let currWord of splittedText) {
        if (currWord === word) {
            count++;
        }
    }

    console.log(count);
}

countOccurrences('This is a word and it also is a sentence', 'is');