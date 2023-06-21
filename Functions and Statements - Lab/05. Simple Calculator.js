function calculator(...input) {
    let numberOne = input[0];
    let numberTwo = input[1];
    let operator = input[2];

    let result = 0;
    switch(operator) {
        case "multiply":
            result = numberOne * numberTwo;
            break;

        case "divide":
            result = numberOne / numberTwo;
            break;

        case "add":
            result = numberOne + numberTwo;
            break;

        case "subtract":
            result = numberOne - numberTwo;
            break;
    }

    console.log(result);
}

calculator(5, 5, 'multiply');