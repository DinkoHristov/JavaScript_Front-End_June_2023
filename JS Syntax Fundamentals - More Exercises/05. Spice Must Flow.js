function extractSpice(startingYield) {

    let exceededSpice = 0;

    let isAbandoned = false;
    let days = 0;
    while (startingYield >= 100) {
        days++;
        exceededSpice += startingYield - 26;

        startingYield -= 10;

        if (startingYield < 100) {
            isAbandoned = true;
            break;
        }
    }

    if (isAbandoned) {
        if (exceededSpice >= 26) {
            exceededSpice -= 26;
        }
    }

    console.log(days);
    console.log(exceededSpice)
}

extractSpice(450);