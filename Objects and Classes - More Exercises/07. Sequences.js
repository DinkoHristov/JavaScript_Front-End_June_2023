function storeNumbers(input) {
    let finalArray = [];

    for (let i = 0; i < input.length; i++) {
        let newArray = [];

        const currRow = JSON.parse(input[i]);
        for (let j = 0; j < currRow.length; j++) {
            newArray.push(currRow[j]);
        }

        const sortedArray = Array.from(newArray).sort((a, b) => b - a);
        finalArray.push(sortedArray);
    }

    const resultArray = [];
    for (let i = 0; i < finalArray.length; i++) {
        const currArray = finalArray[i];
        let isUnique = true;

        for (let j = 0; j < resultArray.length; j++) {
            const nextArray = resultArray[j];

            if (currArray.toString() === nextArray.toString()) {
                isUnique = false;
                break;
            }
        }

        if (isUnique) {
            resultArray.push(currArray);
        }
    }

    resultArray.sort((a, b) => a.length - b.length).forEach(array => {
        console.log(`[${array.join(", ")}]`);
    });
}

storeNumbers(
["[-3, -2, -1, 0, 1, 2, 3, 4]",
"[10, 1, -17, 0, 2, 13]",
"[4, -3, 3, -2, 2, -1, 1, 0]"
]
);

// storeNumbers(
//     ["[7.14, 7.180, 7.339, 80.099]",
// "[7.339, 80.0990, 7.140000, 7.18]",
// "[7.339, 7.180, 7.14, 80.099]"]
// );