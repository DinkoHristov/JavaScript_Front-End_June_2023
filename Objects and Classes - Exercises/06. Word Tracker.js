function countWordOccurences(input) {
    class Words {
        constructor(name, occurences) {
            this.name = name;
            this.occurences = occurences;
        }
    }

    let searchingWords = input[0].split(" ");
    input.shift();

    let wordsForSearch = [];
    for(let i = 0; i < searchingWords.length; i++) {
        let currentWord = searchingWords[i];
        wordsForSearch.push(currentWord);
    }

    let words = [];
    for(let i = 0; i < wordsForSearch.length; i++) {
        let wordName = wordsForSearch[i];
        let occurences = 0;

        input.forEach(function(word) {
            if(wordName === word) {
                occurences++;
            }
        });

        let word = new Words(wordName, occurences);
        words.push(word);
    }

    let sortedWords = words.sort(
        (w1, w2) => (w1.occurences < w2.occurences) ? 1 : (w1.occurences > w2.occurences) ? -1 : 0
    );

    sortedWords.forEach(function(word) {
        console.log(`${word.name} - ${word.occurences}`);
    });
}

countWordOccurences(
    [
        'is the',
        'first', 'sentence', 'Here', 'is', 
        'another', 'the', 'And', 'finally', 'the', 
        'the', 'sentence'
    ]               
);