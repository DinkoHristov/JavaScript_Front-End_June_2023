function storeStudents(input) {
    let course = {};

    for (let i = 0; i < input.length; i++) {
        let command = input[i];

        if (command.includes(":")) {
            // {course name}: {capacity}
            let [courseName, capacity] = command.split(": ");

            if (!course.hasOwnProperty(courseName)) {
                course[courseName] = {
                    capacity: Number(capacity),
                    students: []
                };
            } else {
                course[courseName].capacity += Number(capacity);
            }
        } else {
            // {username}[{credits count}] with email {email} joins {course name}
            let info = command.split(" ");
            let start = -1;
            let end = 0;
            for (let i = 0; i < info[0].length; i++) {
                if (info[0][i] === "[") {
                    start = i;
                }

                if (info[0][i] === "]") {
                    end = i;
                }
            }

            let credits = Number(info[0].substr(start + 1, end - start - 1));
            let user = info[0].substr(0, start);
            info.splice(0, 1);

            info.splice(0, 1);
            info.splice(0, 1);
            let email = info[0];
            info.splice(0, 1)
            info.splice(0, 1);
            let courseName = info[0];
            info.splice(0, 1);

            if (course.hasOwnProperty(courseName)) {
                if (course[courseName].capacity > 0) {
                    course[courseName].students.push({
                        user: user,
                        email: email,
                        credits: credits
                    });

                    course[courseName].capacity--;
                }
            }
        }
    }

    let sortedCourses = [];
    Object.entries(course).forEach(([item, data]) => {
        sortedCourses.push({
            name: item,
            count: data.students.length
        });
    });

    sortedCourses.sort((a, b) => b.count - a.count).forEach(item => {
        let currentCourse = course[item.name];

        console.log(`${item.name}: ${currentCourse.capacity} places left`);
        currentCourse.students.sort((a, b) => b.credits - a.credits).forEach(student => {
            console.log(`--- ${student.credits}: ${student.user}, ${student.email}`);
        });
    });
}

// storeStudents(
// [
// 'JavaBasics: 2', 
// 'user1[25] with email user1@user.com joins C#Basics', 
// 'C#Advanced: 3', 
// 'JSCore: 4', 
// 'user2[30] with email user2@user.com joins C#Basics', 
// 'user13[50] with email user13@user.com joins JSCore', 
// 'user1[25] with email user1@user.com joins JSCore', 
// 'user8[18] with email user8@user.com joins C#Advanced', 
// 'user6[85] with email user6@user.com joins JSCore', 
// 'JSCore: 2', 
// 'user11[3] with email user11@user.com joins JavaBasics', 
// 'user45[105] with email user45@user.com joins JSCore', 
// 'user007[20] with email user007@user.com joins JSCore', 
// 'user700[29] with email user700@user.com joins JSCore', 
// 'user900[88] with email user900@user.com joins JSCore'
// ]
// );

storeStudents(
[
    'JavaBasics: 15',
    'user1[26] with email user1@user.com joins JavaBasics',
    'user2[36] with email user11@user.com joins JavaBasics',
    'JavaBasics: 5',
    'C#Advanced: 5',
    'user1[26] with email user1@user.com joins C#Advanced',
    'user2[36] with email user11@user.com joins C#Advanced',
    'user3[6] with email user3@user.com joins C#Advanced',
    'C#Advanced: 1',
    'JSCore: 8',
    'user23[62] with email user23@user.com joins JSCore'
]
);