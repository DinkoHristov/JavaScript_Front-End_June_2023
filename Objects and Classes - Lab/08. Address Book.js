function sortPersonsByName(input) {
    let names = [];

    for(let i = 0; i < input.length; i++) {
        let currentName = 
        {
            name: input[i].split(":")[0],
            address: input[i].split(":")[1]
        };

        let isExists = false;
        for(let j = 0; j < names.length; j++) {
            let existingName = names[j];

            if (currentName.name === existingName.name) {
                isExists = true;
                existingName.address = currentName.address;
            }
        }

        if (!isExists) {
            names.push(currentName);
        }
    }

    const sortedNames = names.sort((a, b) => 
    a.name.localeCompare(b.name));

    sortedNames.forEach(function(element) {
        console.log(`${element.name} -> ${element.address}`);
    });
}

sortPersonsByName(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']);