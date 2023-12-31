function sortProducts(input) {
    // const products = input.reduce((acc, curr) => 
    // {
    //     const [name, price] = curr.split(" : ");
    //     acc[name] = Number(price);

    //     return acc;
    // }, {})

    // const sortedKeys = Object.keys(products).sort();

    // let letter = sortedKeys[0][0];

    // sortedKeys.forEach((key, i) => {
    //     if (i === 0) {
    //         console.log(letter);
    //     }
    //     else if (key[0] !== letter) {
    //         letter = key[0];
    //         console.log(letter);
    //     }

    //     console.log(`  ${key}: ${products[key]}`);
    // });

    const products = input.reduce((acc, curr) => {
        const [name, price] = curr.split(" : ");
        const letter = name[0];

        if (!acc[letter]) {
            acc[letter] = [];
        }

        acc[letter].push({name, price});
        return acc;
    }, {});

    Object.keys(products)
    .sort()
    .forEach((letter) => {
        console.log(letter);
        products[letter]
        .sort((a, b) => a.name.localeCompare(b.name))
        .forEach((product) => {
            console.log(`  ${product.name}: ${product.price}`);
        });
    })
}

sortProducts(
    [
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ]
);