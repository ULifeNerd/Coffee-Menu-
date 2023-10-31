const coffeeMenu = require('./coffee_data');

console.log(coffeeMenu);

const coffeeMenu = require('./coffee_data');

const inexpensiveDrinks = coffeeMenu.filter(drink => drink.price <= 5);
console.log(inexpensiveDrinks);

const coffeeMenu = require('./coffee_data');

const evenPricedDrinks = coffeeMenu.filter(drink => drink.price % 2 === 0);
console.log(evenPricedDrinks);

const coffeeMenu = require('./coffee_data');

const totalCost = coffeeMenu.reduce((total, drink) => total + drink.price, 0);
console.log("Total cost if you order one of every drink: $" + totalCost);

const coffeeMenu = require('./coffee_data');

const seasonalDrinks = coffeeMenu.filter(drink => drink.seasonal);
console.log(seasonalDrinks);

const coffeeMenu = require('./coffee_data');

const seasonalDrinksWithImportedBeans = seasonalDrinks.map(drink => {
    return `${drink.name} with imported beans`;
});

console.log(seasonalDrinksWithImportedBeans);
