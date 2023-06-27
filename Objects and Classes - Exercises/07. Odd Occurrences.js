function countOddOccurences(input) {
    let inputWords = input.toLowerCase().split(" ");

    let checkedWords = [];
    let oddOccurences = [];
    for(let i = 0; i < inputWords.length; i++) {
        let currentWord = inputWords[i];
        inputWords.shift(i);
        let count = 1;

        for(let j = 0; j < inputWords.length; j++) {
            let nextWord = inputWords[j];

            if (currentWord === nextWord) {
                count++;
            }
        }

        if (count % 2 !== 0 && !oddOccurences.includes(currentWord) && !checkedWords.includes(currentWord)) {
            oddOccurences.push(currentWord);
            checkedWords.push(currentWord);
        } else {
            checkedWords.push(currentWord);
        }

        i = - 1;
    }

    console.log(oddOccurences.join(" "));
}

countOddOccurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');