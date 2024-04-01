//  task: 34
//  solution

// Array containing favorite pizza names

let Pizzas: string [] = ["Pepperoni", "Margherita", "BBQ Chicken"];

// Printing pizza names using a for loop

console.log("printing pizzas names:");
for(let pizza of Pizzas) {
 console.log(pizza);
}

// // Printing sentences about liking each pizza

console.log("sentences about liking pizza");
for(let pizza of Pizzas) {
    console.log(`I like ${pizza} pizza.`);
}

// Additional statement about overall love for pizza

console.log("I really love pizza.");