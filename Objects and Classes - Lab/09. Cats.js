function printCatMeow(input) {
    for(let i = 0; i < input.length; i++) {
        let catInfo = input[i].split(" ");

        let cat = 
        {
            name: catInfo[0],
            age: catInfo[1]
        };

        console.log(`${cat.name}, age ${cat.age} says Meow`);
    }
}

printCatMeow(['Mellow 2', 'Tom 5']);