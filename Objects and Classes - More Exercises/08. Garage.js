function storeCars(input) {
    let garage = [];

    for (let i = 0; i < input.length; i++) {
        let info = input[i].split(" - ");
        let garageNumber = info[0];

        if (!garage[garageNumber]) {
            garage[garageNumber] = [];
        }

        garage[garageNumber].push(info[1]);
    }

    const keys = Object.keys(garage);

    for (let i = 0; i < keys.length; i++) {
        console.log(`Garage № ${keys[i]}`);
        let cars = garage[[keys[i]]];

        for (let j = 0; j < cars.length; j++) {
            let stringInfo = cars[j].replace(/:/g, " -");
            console.log(`--- ${stringInfo}`);
        }
    }

    // const keys = Object.keys(garage);
    // for (let i = 0; i < keys.length; i++) {
    //     let currKey = keys[i];
    //     let currGarage = garage[currKey];

    //     console.log(`Garage № ${currKey}`);
    //     for (let j = 0; j < currGarage.length; j++) {
    //         let split = currGarage[j].split(", ");

    //         let stringResult = [];
    //         for (let n = 0; n < split.length; n++) {
    //             let info = split[n].split(": ");
    //             let current = info[0] + " - " + info[1];

    //             stringResult.push(current);
    //         }

    //         console.log(`--- ${stringResult.join(", ")}`);
    //     }
    // }
}

storeCars(
    ['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']
);