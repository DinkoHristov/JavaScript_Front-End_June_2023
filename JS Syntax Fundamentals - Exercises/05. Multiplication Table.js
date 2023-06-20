function multiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
        let multiplication = number * i;
        console.log(`${number} X ${i} = ${multiplication}`)
    }
}

multiplicationTable(5);