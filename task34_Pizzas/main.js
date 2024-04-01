//  task: 34
//  solution
// Array containing favorite pizza names
var Pizzas = ["Pepperoni", "Margherita", "BBQ Chicken"];
// Printing pizza names using a for loop
console.log("printing pizzas names:");
for (var _i = 0, Pizzas_1 = Pizzas; _i < Pizzas_1.length; _i++) {
    var pizza = Pizzas_1[_i];
    console.log(pizza);
}
// // Printing sentences about liking each pizza
console.log("sentences about liking pizza");
for (var _a = 0, Pizzas_2 = Pizzas; _a < Pizzas_2.length; _a++) {
    var pizza = Pizzas_2[_a];
    console.log("I like ".concat(pizza, " pizza."));
}
// Additional statement about overall love for pizza
console.log("I really love pizza.");
