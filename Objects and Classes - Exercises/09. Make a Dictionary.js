function createDictionary(input) {
    let dictionary = {};

    for(let i = 0; i < input.length; i++) {
        let object = JSON.parse(input[i]);
        dictionary = Object.assign(dictionary, object);
    }

    let sortedKeys = Object.keys(dictionary);
    let sortedDictionary = sortedKeys.sort(
        (e1, e2) => e1.localeCompare(e2)
    );

    for(let term of sortedDictionary) {
        let definition = dictionary[term];
        console.log(`Term: ${term} => Definition: ${definition}`);
    }
}

createDictionary(
    [
        '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
        '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
        '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
        '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
        '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
);