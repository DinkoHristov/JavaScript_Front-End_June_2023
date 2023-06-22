function checkIsPalindrome(input) {
    for(let i =  0; i < input.length; i++) {
        let currentNumber = input[i];

        let numberCopy = currentNumber;
        let reversedNumber = "";
        while(numberCopy > 0) {
            reversedNumber += numberCopy % 10;

            numberCopy = parseInt((numberCopy / 10), 10);
        }

        if (currentNumber === Number(reversedNumber)) {
            console.log("true");
        } else {
            console.log("false");
        }
    }
}

checkIsPalindrome([123, 323, 421, 121]);