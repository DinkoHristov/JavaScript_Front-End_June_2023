function solve(input) {
    let number = Number(input.shift());

    let riders = {};

    for (let i = 0; i < number; i++) {
        let [rider, fuelCapacity, position] = input.shift().split("|");

        if (!riders.hasOwnProperty(rider)) {
            riders[rider] = {
                fuelCapacity,
                position
            };
        }
    }

    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(" - ");

        if (command.includes("StopForFuel")) {
            command.shift();

            let [rider, minimumFuel, changedPosition] = command;

            if (riders.hasOwnProperty(rider)) {
                if (Number(riders[rider].fuelCapacity) < Number(minimumFuel)) {
                    riders[rider].fuelCapacity = minimumFuel;
                    riders[rider].position = changedPosition;

                    console.log(`${rider} stopped to refuel but lost his position, now he is ${changedPosition}.`);
                } else {
                    console.log(`${rider} does not need to stop for fuel!`);
                }
            }

        } else if (command.includes("Overtaking")) {
            command.shift();

            let [riderOne, riderTwo] = command;

            if (riders.hasOwnProperty(riderOne) && riders.hasOwnProperty(riderTwo)) {
                if (Number(riders[riderOne].position) < riders[riderTwo].position) {
                    let newPosition = riders[riderOne].position;
                    riders[riderOne].position = riders[riderTwo].position;
                    riders[riderTwo].position = newPosition;

                    console.log(`${riderOne} overtook ${riderTwo}!`);
                }
            }
            
        } else if (command.includes("EngineFail")) {
            command.shift();
            
            let [rider, lapsLeft] = command;
            
            if (riders.hasOwnProperty(rider)) {
                delete riders[rider];

                console.log(`${rider} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`);
            }
        } else {
            break;
        }
    }

    Object.entries(riders).forEach(([rider, data]) => {
        console.log(`${rider}`);
        console.log(`  Final position: ${data.position}`);
    });
}

// solve(
// ([
//     "3",
//     "Valentino Rossi|100|1",
//     "Marc Marquez|90|2",
//     "Jorge Lorenzo|80|3",
//     "StopForFuel - Valentino Rossi - 50 - 1",
//     "Overtaking - Marc Marquez - Jorge Lorenzo",
//     "EngineFail - Marc Marquez - 10",
//     "Finish"
// ])
// );


solve(
([
    "4",
    "Valentino Rossi|100|1",
    "Marc Marquez|90|3",
    "Jorge Lorenzo|80|4",
    "Johann Zarco|80|2",
    "StopForFuel - Johann Zarco - 90 - 5",
    "Overtaking - Marc Marquez - Jorge Lorenzo",
    "EngineFail - Marc Marquez - 10",
    "Finish"
])
);