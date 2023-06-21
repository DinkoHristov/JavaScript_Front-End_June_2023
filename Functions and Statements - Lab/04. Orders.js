function calculateTotalPrice(...input) {
    let product = input[0];
    let count = input[1];

    let totalPrice= 0;
    switch(product) {
        case "coffee":
            totalPrice = 1.50 * count;
            break;

        case "water":
            totalPrice = 1 * count;
            break;

        case "coke":
            totalPrice = 1.40 * count;
            break;

        case "snacks":
            totalPrice = 2 * count;
            break;
    }

    console.log(`${totalPrice.toFixed(2)}`);
}

calculateTotalPrice("water", 5);