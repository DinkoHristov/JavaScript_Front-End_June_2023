function sameNumbers(number) {

    let digits = Array.from(String(number), Number);

    let isDigitsSame = true;

    let sumDigits = 0;
    for (let i = 0; i < digits.length; i++) {
        let currNumber = digits[i];

        sumDigits += currNumber;

        for (let j = i + 1; j < digits.length; j++) {
            let nextNumber = digits[j];

            if (currNumber !== nextNumber) {
                isDigitsSame = false;
            }
        }
    }

    if (isDigitsSame) {
        console.log("true");
    }
    else {
        console.log("false");
    }

    console.log(sumDigits);
}

sameNumbers(2222222);