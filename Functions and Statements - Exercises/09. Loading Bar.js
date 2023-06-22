function loadingBar(number) {
    let visualizeBar = "";

    let numberCopy = number;
    let repeatTimes = 0;
    while (numberCopy > 0) {
        numberCopy = parseInt((numberCopy / 10), 10);
        if (numberCopy > 0) {
            repeatTimes = numberCopy;
        }

        if (numberCopy === 10) {
            break;
        }
    }

    if (repeatTimes > 0) {
        let left = 10 - repeatTimes;

        visualizeBar = '%'.repeat(repeatTimes);
        visualizeBar += '.'.repeat(left);
    }

    if (number < 100) {
        console.log(`${number}% [${visualizeBar}]`);
        console.log("Still loading...");
    } else {
        console.log("100% Complete!");
        console.log(`[${visualizeBar}]`);
    }
}

loadingBar(50);