function printValues(object) {
    for (const key in object) {
        console.log(`${key} -> ${object[key]}`);
    }
}

printValues({name: "Sofia", area: 492, population: 1238438,
country: "Bulgaria", postCode: "1000"});