function printNthElement(array, step) {
    let newArray = [];

    for (let i = 0; i < array.length; i += step) {
        if (i < array.length) {
            newArray.push(array[i]);
        }
    }

    return newArray;
}

printNthElement(['5', '20', '31', '4', '20'], 2);