function numberOnPower(...numbers) {
    let number = numbers[0];
    let power = numbers[1];

    let result = Math.pow(number, power);
    console.log(result);
}

numberOnPower(2, 8);