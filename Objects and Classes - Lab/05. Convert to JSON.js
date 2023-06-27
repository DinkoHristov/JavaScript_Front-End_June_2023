function convertToJsonString(...input) {
    let person = 
    {
        name: input[0],
        lastName: input[1],
        hairColor: input[2]
    };

    console.log(JSON.stringify(person));
}

convertToJsonString('George', 'Jones', 'Brown');