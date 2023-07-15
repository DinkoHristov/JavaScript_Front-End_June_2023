function makeArmy(input) {
    let army = [];

    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(" ");

        if (command.includes("arrives")) {
            command.pop();

            let leader = command.join(" ");
            army[leader] = [];

        } else if (command.includes("+")) {
            let armyCount = Number(command.pop());
            command.pop();
            let armyName = command.join(" ");

            let keys = Object.keys(army);
            keys.forEach(item => {
                army[item].forEach(data => {
                    if (data.armyName === armyName) {
                        data.armyCount += armyCount;
                    }
                });
            });

        } else if (command.includes("defeated")) {
            command.pop();

            let leader = command.join(" ");
            if (army[leader]) {
                delete army[leader];
            }
        } else {
            let armyCount = Number(command.pop());
            let nameInfo = command.pop();
            let armyName = nameInfo.substr(0, nameInfo.length - 1);
            let leaderInfo = command.join(" ");
            let leader = leaderInfo.substr(0, leaderInfo.length - 1);

            if (army[leader]) {
                if (army[leader].armyName === armyName) {
                    army[leader].armyCount += armyCount;
                } else {
                    army[leader].push({
                        armyName,
                        armyCount
                    });
                }
            }
        }
    }

    let sortedLeaders = [];
    Object.entries(army).forEach(([element, data]) => {
        let points = 0;
        army[element].forEach(army => {
            points += army.armyCount;
        });

        sortedLeaders.push({
            element,
            points
        });
    });

    let finalLeaders = sortedLeaders.sort((a, b) => b.points - a.points);
    finalLeaders.forEach(leader => {
        console.log(`${leader.element}: ${leader.points}`);
        army[leader.element].sort((a, b) => b.armyCount - a.armyCount).forEach(army => {
            console.log(`>>> ${army.armyName} - ${army.armyCount}`);
        });
    });
}

// makeArmy(
// [
// 'Rick Burr arrives', 
// 'Fergus: Wexamp, 30245', 
// 'Rick Burr: Juard, 50000',
// 'Juard + 1350', 
// 'Findlay arrives', 
// 'Findlay: Britox, 34540', 
// 'Wexamp + 6000', 
// 'Juard + 1350', 
// 'Britox + 4500', 
// 'Porter arrives', 
// 'Porter: Legion, 55000', 
// 'Legion + 302', 
// 'Rick Burr defeated', 
// 'Porter: Retix, 3205'
// ]
// );

makeArmy(
[
'Rick Burr arrives', 
'Findlay arrives', 
'Rick Burr: Juard, 1500', 
'Wexamp arrives', 
'Findlay: Wexamp, 34540', 
'Wexamp + 340', 
'Wexamp: Britox, 1155', 
'Wexamp: Juard, 43423'
]
);