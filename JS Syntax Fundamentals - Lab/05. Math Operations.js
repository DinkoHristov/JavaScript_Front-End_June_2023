function mathOperations(numberOne, numberTwo, operation) {
    let numOne = Number(numberOne);
    let numTwo = Number(numberTwo);

    let result;
    switch(operation) {
        case '+':
            result = numOne + numTwo;
            console.log(result);
            break;

        case '-':
            result = numOne - numTwo;
            console.log(result);
            break;

        case '*':
            result = numOne * numTwo;
            console.log(result);
            break;

        case '/':
            result = numOne / numTwo;
            console.log(result);
            break;

        case '%':
            result = numOne % numTwo;
            console.log(result);
            break;

        case '**':
            result = numOne ** numTwo;
            console.log(result);
            break;
    }
}

mathOperations(5, 6, '**');