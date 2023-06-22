function factorialDivision(...input) {
    let factorialBondOne = input[0];
    let factorialBondTwo = input[1];

    let finalResult = 0;

    let resultOne = 1;
    for(let i = factorialBondOne; i >= 1; i--) {
        resultOne *= i;
    }

    let resultTwo = 1;
    for(let i = factorialBondTwo; i >= 1; i--) {
        resultTwo *= i;
    }

    finalResult = resultOne / resultTwo;
    console.log(`${finalResult.toFixed(2)}`);
}

factorialDivision(5, 2);