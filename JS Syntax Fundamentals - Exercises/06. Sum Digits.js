function sumDigits(number) {

    let sum = 0;

    let digits = Array.from(String(number, Number));

    for (let i = 0; i < digits.length; i++) {
        sum += Number(digits[i]);
    }

    console.log(sum);
}

sumDigits(543);