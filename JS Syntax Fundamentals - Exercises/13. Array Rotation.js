function rotateArray(array, numberOfRotations) {

    for (let n = 1; n <= numberOfRotations; n++) {
        for (let i = 0; i < array.length - 1; i++) {
            let firstElement = array[i];
            array[i] = array[i + 1];
            array[i + 1] = firstElement;
        }
    }

    console.log(array.join(' '));
}

rotateArray([2, 4, 15, 31], 5);