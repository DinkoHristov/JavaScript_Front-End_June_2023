function subtract(...input) {
    let numberOne = input[0];
    let numberTwo = input[1];
    let numberThree = input[2];

    let result = sum(numberOne, numberTwo) - numberThree;
    console.log(result);

    function sum(...input) {
        let numberOne = input[0];
        let numberTwo = input[1];
    
        let result = numberOne + numberTwo;
    
        return result;
    }
}

subtract(5, 3, 2);