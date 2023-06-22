function printAsciCharacter(...input) {
    let start = input[0].charCodeAt(0);
    let end = input[1].charCodeAt(0);

    if (start > end) {
        temp = start;
        start = end;
        end = temp;
    }

    let charactersBetweenIndexes = [];
    for(let i = start + 1; i < end; i++) {
        let asciSymbol = String.fromCharCode(i);

        charactersBetweenIndexes.push(asciSymbol);
    }

    console.log(charactersBetweenIndexes.join(" "));
}

printAsciCharacter('C', '#');