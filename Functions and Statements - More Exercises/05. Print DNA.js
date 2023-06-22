function printDna(number) {
    let letters = "ATCGTTAGGG";

    let characters = [];
    for(let c = 0; c < letters.length; c++) {
        let currentLetter = letters[c];
        characters.push(currentLetter);
    }

    let index = 0;
    for (let i = 1; i <= number; i++) {
        let firstLetter = characters.shift();
        let secondLetter = characters.shift();

        index++;
        if(index === 1) {
            console.log(`**${firstLetter}${secondLetter}**`);
        }
        else if (index === 2) {
            console.log(`*${firstLetter}--${secondLetter}*`);
        }
        else if (index === 3) {
            console.log(`${firstLetter}----${secondLetter}`);
        }
        else if (index === 4) {
            console.log(`*${firstLetter}--${secondLetter}*`);
        }

        if (index === 4) {
            index = 0;
        }

        characters.push(firstLetter);
        characters.push(secondLetter);
    }
}

printDna(10);