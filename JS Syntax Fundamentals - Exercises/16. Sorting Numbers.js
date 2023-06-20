function sortArray(array) {
    let sortedArray = array.sort((a, b) => (a - b));

    let finalSort = [];
    let counter = 0;
    for (let i = 0; i < sortedArray.length; i++) {
        finalSort[counter] = sortedArray[i];
        counter++;

        if (counter === sortedArray.length) {
            break;
        }

        finalSort[counter] = sortedArray[sortedArray.length - 1 - i];
        counter++;

        if (counter === sortedArray.length) {
            break;
        }
    }

    return finalSort;
}

sortArray([1, 65, 3, 52, 48, 63, 31, -3, 18, 56] );