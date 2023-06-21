function calculator(numberOne, operator, numberTwo) {
    let result = 0;

    switch(operator) {
        case '+':
            result = numberOne + numberTwo;
            console.log(result.toFixed(2));
            break;

        case '-':
            result = numberOne - numberTwo;
            console.log(result.toFixed(2));
            break;

        case '/':
            result = numberOne / numberTwo;
            console.log(result.toFixed(2));
            break;

        case '*':
            result = numberOne * numberTwo;
            console.log(result.toFixed(2));
            break;
    }
}

calculator(25.5, '-', 3);