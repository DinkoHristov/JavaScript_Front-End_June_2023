function pascalCase(text) {
    const pattern = /[A-Z][a-z]*/g;

    let match = [...text.matchAll(pattern)];

    console.log(match.join(", "));
}

pascalCase('CarBBCar');