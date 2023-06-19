function sumFirstAndLast(input) {
    let array = input;

    let sum = array[0] + array[array.length - 1];

    console.log(sum);
}

sumFirstAndLast([20, 30, 40, 50]);