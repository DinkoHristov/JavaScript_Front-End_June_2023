function area(input) {

    if (typeof(input) === 'number')
    {
        let number = Number(input);
        let area = Math.pow(number, 2) * Math.PI;

        console.log(area.toFixed(2));
    }
    else
    {
        console.log(`We can not calculate the circle area, because we receive a ${typeof(input)}.`);
    }
}

area(5);