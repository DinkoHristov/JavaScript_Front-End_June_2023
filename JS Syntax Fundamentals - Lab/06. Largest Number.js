function largestNumber(inputOne, inputTwo, inputThree) {
    let numberOne = Number(inputOne);
    let numberTwo = Number(inputTwo);
    let numberThree = Number(inputThree);

    let largestNum;

    if (numberOne > numberTwo && numberOne > numberThree)
    {
        largestNum = numberOne;
    }
    else if (numberTwo > numberOne && numberTwo > numberThree)
    {
        largestNum = numberTwo;
    }
    else
    {
        largestNum = numberThree;
    }

    console.log(`The largest number is ${largestNum}.`);
}

largestNumber(-6, -5, -22.5 );