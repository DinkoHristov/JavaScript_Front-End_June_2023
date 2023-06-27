function cardNumberRecord(input) {
    let carsRecord = [];

    for(let i = 0; i < input.length; i++) {
        let carInfo = input[i].split(", ");
        let direction = carInfo[0];
        let carNumber = carInfo[1];

        if (direction === "IN") {
            if(!carsRecord.includes(carNumber)) {
                carsRecord.push(carNumber);
            }
        } else if (direction === "OUT") {
            if (carsRecord.includes(carNumber)) {
                let index = carsRecord.indexOf(carNumber);
                carsRecord.splice(index, 1);
            }
        }
    }

    let sortedCarsRecord = carsRecord.sort(
        (c1, c2) => (c1 > c2) ? 1 : (c1 < c2) ? -1 : 0
    );

    if(sortedCarsRecord.length <= 0) {
        console.log("Parking Lot is Empty");
    } else {
        sortedCarsRecord.forEach(function(car) {
            console.log(car);
        });
    }
}

cardNumberRecord(
    [
        'IN, CA2844AA',
        'IN, CA1234TA',
        'OUT, CA2844AA',
        'IN, CA9999TT',
        'IN, CA2866HI',
        'OUT, CA1234TA',
        'IN, CA2844AA',
        'OUT, CA2866HI',
        'IN, CA9876HH',
        'IN, CA2822UU'
    ]        
);