function createTown(townsInfo) {
    let towns = [];
    for(let i = 0; i < townsInfo.length; i++) {
        let [town, latitude, longitude] = townsInfo[i].split(" | ");

        let currentTown = 
        {
            town: town,
            latitude: Number(latitude),
            longitude: Number(longitude)
        };

        towns.push(currentTown);
    }

    towns.forEach(t => console.log(`{ town: '${t.town}', latitude: '${t.latitude.toFixed(2)}', longitude: '${t.longitude.toFixed(2)}' }`))
}

createTown(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);