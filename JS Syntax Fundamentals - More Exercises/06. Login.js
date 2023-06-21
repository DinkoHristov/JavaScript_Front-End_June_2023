function login(input) {
    let username = input[0];

    let tries = 0;
    for (let i = 1; i <= 4; i++) {
        tries++;

        let password = input[i].split("").reverse().join("");
        if (password === username) {
            console.log(`User ${username} logged in.`);
            break;
        } else {
            if (i < 4) {
                console.log("Incorrect password. Try again.");
            }
        }

        if (tries === 4) {
            console.log(`User ${username} blocked!`);
            break;
        }
    }
}

login(['sunny','rainy','cloudy','sunny','notsunny']);