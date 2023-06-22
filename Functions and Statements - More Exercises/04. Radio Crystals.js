function modelingCrystal(input) {
    let desiredThickness = input[0];

    for(let i = 1; i < input.length; i++) {
        let cutCount = 0;
        let lapCount = 0;
        let grindCount = 0;
        let etchCount = 0;
        let xrayCount = 0;

        let currentThickness = input[i];

        console.log(`Processing chunk ${currentThickness} microns`);

        while(currentThickness !== desiredThickness) {
            while(currentThickness / 4 >= desiredThickness) {
                currentThickness /= 4;
                cutCount++;
            }

            if (cutCount > 0) {
                console.log(`Cut x${cutCount}`);
                console.log(`Transporting and washing`);
                currentThickness = Math.floor(currentThickness);
            }

            while ((currentThickness - (currentThickness * 0.20)) >= desiredThickness) {
                currentThickness -= currentThickness * 0.20;
                lapCount++;
            }

            if (lapCount > 0) {
                console.log(`Lap x${lapCount}`);
                console.log(`Transporting and washing`);
                currentThickness = Math.floor(currentThickness);  
            }

            while ((currentThickness - 20) >= desiredThickness) {
                currentThickness -= 20;
                grindCount++;
            }

            if (grindCount > 0) {
                console.log(`Grind x${grindCount}`);
                console.log(`Transporting and washing`);
                currentThickness = Math.floor(currentThickness);
            }

            while ((currentThickness - 2) >= desiredThickness - 1) {
                currentThickness -= 2;
                etchCount++;
            }

            if (etchCount > 0) {
                console.log(`Etch x${etchCount}`);
                console.log(`Transporting and washing`);
                currentThickness = Math.floor(currentThickness);
            }

            if (currentThickness < desiredThickness && xrayCount != 1) {
                currentThickness += 1;
                xrayCount++;
                console.log(`X-ray x1`);
            }
        }

        console.log(`Finished crystal ${desiredThickness} microns`);
    }
}

modelingCrystal([1000, 4000, 8100]);