function carWash(materials) {
    let points = 0;

    for(let i = 0; i < materials.length; i++) {
        let currentMaterial = materials[i];

        if (currentMaterial === "soap") {
            points += 10;
        }
        else if (currentMaterial === "water") {
            points += points * 0.20;
        }
        else if (currentMaterial === "vacuum cleaner") {
            points += points * 0.25;
        }
        else if (currentMaterial === "mud") {
            points -= points * 0.10;
        }
    }

    console.log(`The car is ${points.toFixed(2)}% clean.`);
}

carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);