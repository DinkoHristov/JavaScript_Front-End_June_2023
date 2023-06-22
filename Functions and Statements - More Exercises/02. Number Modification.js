function numberModification(number) {
    let copyNumber = number;

    let average = 0; 
    let digitsCount = 0;
    let isNumberFound = false;
    while(copyNumber > 0) {
        average += copyNumber % 10;
        digitsCount++;
        copyNumber = parseInt((copyNumber / 10), 10);

        if (copyNumber === 0) {
            if (average / digitsCount > 5) {
                isNumberFound = true;
                break;
            }

            let stringNumber = String(number) + '9';
            number = Number(stringNumber);
            copyNumber = number;
            digitsCount = 0;
            average = 0;
        }
    }

    console.log(number);
}

numberModification(5835);