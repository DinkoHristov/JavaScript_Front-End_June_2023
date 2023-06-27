function manageAppointments(input) {
    let list = [];

    for(let i = 0; i < input.length; i++) {
        let currentDay = 
        {
            day: input[i].split(" ")[0],
            name: input[i].split(" ")[1]
        };

        let isFound = false;
        for(let j = 0; j < list.length; j++) {
            let foundDay = list[j];

            if (currentDay.day === foundDay.day) {
                isFound = true;
                break;
            }
        }

        if (isFound) {
            console.log(`Conflict on ${currentDay.day}!`);
        } else {
            console.log(`Scheduled for ${currentDay.day}`);
            list.push(currentDay);
        }
    }

    list.forEach(function(element) {
        console.log(`${element.day} -> ${element.name}`);
    });
}

manageAppointments(['Friday Bob', 'Saturday Ted', 'Monday Bill', 'Monday John', 'Wednesday George']);