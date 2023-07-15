function solve(input) {
    const initialFlights = input[0];
    const changedStatus = input[1];
    const flightStatus = input[2][0];

    const flights = initialFlights.reduce((acc, curr) => {
        const current = curr.split(" ");
        const number = current.splice(0, 1);
        const Destination = current.join(" ");
        
        acc[number] = {
            Destination,
            Status: null
        };

        return acc;
    }, {});

    changedStatus.forEach(flight => {
        const [number, status] = flight.split(" ");

        if (flights[number]) {
            flights[number].Status = status;
        }
    });

    if (flightStatus === "Ready to fly") {
        Object.entries(flights).forEach(([number, data]) => {
            if (data.Status === null) {
                data.Status = "Ready to fly";
                console.log(data);
            }
        });
    } else {
        Object.entries(flights).forEach(([number, data]) => {
            if (data.Status === flightStatus) {
                console.log(data);
            }
        })
    }
}

solve(
[
['WN269 Delaware',
'FL2269 Oregon',
'WN498 Las Vegas',
'WN3145 Ohio',
'WN612 Alabama',
'WN4010 New York',
'WN1173 California',
'DL2120 Texas Tech',
'KL5744 Illinois',
'WN678 Pennsylvania'
],
[
'DL2120 Cancelled',
'WN612 Cancelled',
'WN1173 Cancelled',
'SK430 Cancelled'],
['Cancelled']
]);