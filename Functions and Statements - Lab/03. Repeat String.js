function repeatStringNTimes(...input) {
    let string = input[0];
    let count = input[1];

    let newString = string.repeat(count);

    console.log(newString);
}

repeatStringNTimes("abc", 3);