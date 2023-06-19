function reverse(n, input) {
    let size = Number(n);
    let array = input;

    let reversedArray = [];
    for (let i = 0; i < size; i++) {
        reversedArray[i] = array[i];
    }

    let result = "";
    for (let i = reversedArray.length - 1; i >= 0; i--) {
        result += reversedArray[i] + " ";
    }

    console.log(result);
}

reverse(2 ,[20, 30, 40, 50]);