function wordsToUpper(input) {
    let inputToUpperCase = input.toUpperCase();

    let pattern = /\w+/g;
    let matches = [...inputToUpperCase.matchAll(pattern)];
    
    console.log(matches.join(", "));
}

wordsToUpper('Hi, how are you?');