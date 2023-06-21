function bitcoinMining(amountOfGold) {
    const bitcoinPrice = 11949.16;
    let days = 0;

    let firstPurchasedBitcoinDay = 0;
    let totalBitcoins = 0;
    let totalMoney = 0;
    for (let i = 0; i < amountOfGold.length; i++) {
        days++;

        let amount = amountOfGold[i];
        if (days % 3 === 0) {
            // Stealing 30%
            amount -= amount * 0.30;
        }

        let gold = amount * 67.51; 
        totalMoney += gold;
        while (totalMoney >= bitcoinPrice) {
            totalMoney -= bitcoinPrice;

            if (firstPurchasedBitcoinDay === 0) {
                firstPurchasedBitcoinDay = days;
            }
            totalBitcoins++;
        }
    }

    console.log(`Bought bitcoins: ${totalBitcoins}`);
    if (totalBitcoins > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstPurchasedBitcoinDay}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}

bitcoinMining([3124.15, 504.212, 2511.124]);