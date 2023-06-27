function storeProvisions(...input) {
    let products = new Map();

    for(let i = 0; i < input.length; i++) {
        let currentArray = input[i];

        let isProductMade = false;
        let name = "";
        let quantity = 0;
        for(let j = 0; j < currentArray.length; j++) {

            if(j % 2 === 0) {
                name = currentArray[j];
            }
            else {
                isProductMade = true;
                quantity = Number(currentArray[j]);
            }

            if(isProductMade) {
                let product = 
                {
                    name: name,
                    quantity: quantity
                };

                let found = products.has(name);
                if (!found) {
                    products.set(name, quantity);
                } else {
                    products.set(name, (products.get(name)) + quantity);
                }

                name = "";
                quantity = 0;
                isProductMade = false;
            }
        }
    }

    for(let [key, value] of products) {
        console.log(`${key} -> ${value}`);
    }
}

storeProvisions(
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
);