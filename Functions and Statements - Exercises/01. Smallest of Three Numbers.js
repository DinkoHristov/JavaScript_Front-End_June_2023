function smallestNumber(...input) {
    let numberOne = input[0];
    let numberTwo = input[1];
    let numberThree = input[2];

    let smallestNumber = 0;
    if (numberOne < numberTwo && numberOne < numberThree) {
        smallestNumber = numberOne;
    }
    else if (numberTwo < numberOne && numberTwo < numberThree) {
        smallestNumber = numberTwo;
    }
    else {
        smallestNumber = numberThree;
    }

    console.log(smallestNumber);
}

smallestNumber(2, -2, 1);