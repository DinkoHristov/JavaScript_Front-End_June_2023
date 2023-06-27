function heroesRegister(input) {
    class Hero {
        constructor(name, level, items) {
            this.name = name;
            this.level = level;
            this.items = items;
        }
    }

    let heroesList = [];
    for(let i = 0; i < input.length; i++) {
        let heroInfo = input[i].split(" / ");
        let name = heroInfo[0];
        let level = Number(heroInfo[1]);
        let itemsInput = [];
        if (heroInfo.length > 2) {
            itemsInput = heroInfo[2].split(", ");
        }

        let items = [];
        for(let j = 0; j < itemsInput.length; j++) {
            let currentItem = itemsInput[j];
            items.push(currentItem);
        }

        let hero = new Hero(name, level, items);
        heroesList.push(hero);
    }

    let sortedHeroes = heroesList.sort(
        (h1, h2) => (h1.level > h2.level) ? 1 : (h1.level < h2.level) ? -1 : 0
    );

    sortedHeroes.forEach(function(hero) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(", ")}`);
    });
}

heroesRegister(
    [
        'Isacc / 25 / Apple, GravityGun',
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 / Desolator, Sentinel, Antara'
    ]        
);