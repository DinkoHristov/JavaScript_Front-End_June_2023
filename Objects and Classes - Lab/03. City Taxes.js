function cityTaxes(...input) {
    let city = 
    {
        name: input[0],
        population: Number(input[1]),
        treasury: Number(input[2]),
        taxRate: 10,

        collectTaxes() {
            this.treasury += this.population * this.taxRate;
        },

        applyGrowth(percentage) {
            this.population += this.population * percentage / 100;
        },

        applyRecession(percentage) {
            this.treasury -= this.treasury * percentage / 100;
        }
    };

    return city;
}

const city = cityTaxes('Tortuga', 7000, 15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);