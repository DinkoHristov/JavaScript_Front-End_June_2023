function phoneBookInformation(input) {
    let splittedArray = [];

    for(let i = 0; i < input.length; i++) {
        let name = input[i].split(" ")[0];
        let phone = input[i].split(" ")[1];

        let currentPerson = 
        {
            name: name,
            phone: phone
        };

        splittedArray.push(currentPerson);
    }

    for(let i = 0; i < splittedArray.length; i++) {
        let currentPerson = splittedArray[i];
        
        for(let j = i + 1; j < splittedArray.length; j++) {
            let nextPerson = splittedArray[j];

            if (currentPerson.name === nextPerson.name) {
                currentPerson.phone = nextPerson.phone;
                splittedArray.splice(j, 1);
            }
        }
    }

    splittedArray.forEach(function(element) {
        console.log(`${element.name} -> ${element.phone}`);
    });

}

phoneBookInformation(['George 0552554', 'Peter 087587', 'George 0453112', 'Bill 0845344']);