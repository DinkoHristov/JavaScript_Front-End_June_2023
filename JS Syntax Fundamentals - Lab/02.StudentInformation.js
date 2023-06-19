function print(inputName, inputAge, inputGrade) {
    let name = inputName;
    let age = Number(inputAge);
    let grade = Number(inputGrade);

    console.log(`Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`);
}

print('John', 15, 5.4489);