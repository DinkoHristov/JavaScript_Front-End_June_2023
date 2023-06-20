function sortNames(names) {
    let count = 1;

    let sortedNames = names.sort((a, b) => a.localeCompare(b));

    sortedNames.forEach(function(name){
        console.log(`${count}.${name}`);
        count++;
    });
}

sortNames(["John", "Bob", "Christina", "Ema"]);