//  task: 35
//  solution
// Array containing names of animals
var animals = ["Dog", "Cat", "Rabbit"];
// Printing animal names using a for loop
console.log("Printing animal names:");
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log(animal);
}
// Printing statements about each animal
console.log("\nStatements about animals:");
for (var _a = 0, animals_2 = animals; _a < animals_2.length; _a++) {
    var animal = animals_2[_a];
    console.log("A ".concat(animal.toLowerCase(), " would make a great pet."));
}
// Statement about common characteristic
console.log("\nAny of these animals would make a great pet!");
