function arrangeStudents(input) {
    const students = input.reduce((acc, curr) => {
        const currStudent = curr.split(", ");
        const name = currStudent[0].split(": ")[1];
        const grade = Number(currStudent[1].split(": ")[1]) + 1;
        const score = Number(currStudent[2].split(": ")[1]);

        if (score >= 3) {
            if (!acc[grade]) {
                acc[grade] = [];
            }
    
            let student = {
                name,
                score
            };
    
            acc[grade].push(student);
        }

        return acc;
    }, {});

    const sortedGrades = Object.keys(students).sort((a, b) => a - b);
    sortedGrades.forEach(grade => {
        console.log(`${grade} Grade`);
        let averageScore = 0;
        const names = [];

        const currStudent = students[grade];
        Object.entries(currStudent).forEach(([_, data]) => {
            names.push(data.name);
            averageScore += data.score;
        });
        
        console.log(`List of students: ${names.join(", ")}`);
        averageScore /= currStudent.length;
        console.log(`Average annual score from last year: ${averageScore.toFixed(2)}`);
        console.log();
    });
}

arrangeStudents(
[
"Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
"Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
"Student name: George, Grade: 8, Graduated with an average score: 2.83",
"Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
"Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
"Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
"Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
"Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
"Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
"Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
"Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
"Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
]
);