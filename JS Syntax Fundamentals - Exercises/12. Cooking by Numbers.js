function cookingByNumbers(startingPoint, operationOne, operationTwo, operationThree, operationFour, operationFive) {
    let number = Number(startingPoint);

    let operations = [];
    operations[0] = operationOne;
    operations[1] = operationTwo;
    operations[2] = operationThree;
    operations[3] = operationFour;
    operations[4] = operationFive;

    for (let i = 0; i <= 4; i++) {
        let currOperation = operations[i];
        if (currOperation === "chop") {
            number /= 2;
        }
        else if (currOperation === "dice") {
            number = Math.sqrt(number);
        }
        else if (currOperation === "spice") {
            number += 1;
        }
        else if (currOperation === "bake") {
            number *= 3;
        }
        else if (currOperation === "fillet") {
            number -= number * 0.2;
        }

        console.log(number);
    }
}

cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');