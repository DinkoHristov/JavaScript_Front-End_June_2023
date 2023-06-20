function calculateMoney(fruitType, weight, pricePerKilo) {

    let money = weight / 1000 * pricePerKilo;

    console.log(`I need $${money.toFixed(2)} to buy ${(weight / 1000).toFixed(2)} kilograms ${fruitType}.`);
}

calculateMoney('apple', 500, 1.60);