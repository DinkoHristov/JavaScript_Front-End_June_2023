function chechResult(...input) {
    let numberOne = input[0];
    let numberTwo = input[1];
    let numberThree = input[2];

    let negativeCounter = 0;
    if (numberOne < 0) {
        negativeCounter++;
    }

    if (numberTwo < 0) {
        negativeCounter++;
    }

    if (numberThree < 0) {
        negativeCounter++;
    }

    if (negativeCounter % 2 === 0) {
        console.log("Positive");
    } else {
        console.log("Negative");
    }
}

chechResult(5, 12, 15);