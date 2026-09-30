let drinks = ["Latte", "Tea", "Espresso"];
let pastries = ["Croissant", "Muffin", "Bagel"];

console.log("Total drinks count:", drinks.length);
console.log("Total pastries count:", pastries.length);

console.log("Combo 1:", drinks[0], "and", pastries[2]);
console.log("Combo 2:", drinks[1], "and", pastries[0]);
console.log("Combo 3:", drinks[2], "and", pastries[1]);

let selectedDrinkIndex = 0;
let selectedPastryIndex = pastries.length - 1;
console.log("Dynamic Selection:", drinks[selectedDrinkIndex], "and", pastries[selectedPastryIndex]);

console.log("--- Drink Menu ---");
for (let i = 0; i < drinks.length; i++) {
  console.log(`Drink ${i + 1}: ${drinks[i]}`);
}

drinks.push("Flat White");
console.log("Updated drinks list:", drinks);
console.log("Updated number of drinks:", drinks.length);