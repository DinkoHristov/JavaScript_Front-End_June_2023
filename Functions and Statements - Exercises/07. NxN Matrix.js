function printSquareMatrix(size) {
    let matrix = [];

    for(let i = 0; i < size; i++) {
        matrix[i] = [];

        for(let j = 0; j < size; j++) {
            matrix[i][j] = size;
        }
    }

    for(let i = 0; i < size; i++) {
        console.log(matrix[i].join(" "));
    }
}

printSquareMatrix(7);