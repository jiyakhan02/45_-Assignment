//  task: 35
//  solution

// Array containing names of animals
let animals: string[] = ["Dog", "Cat", "Rabbit"];

// Printing animal names using a for loop
console.log("Printing animal names:");
for (let animal of animals) {
    console.log(animal);
}

// Printing statements about each animal
console.log("\nStatements about animals:");
for (let animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

// Statement about common characteristic
console.log("\nAny of these animals would make a great pet!");