// task: 24 
//• Tests for equality and inequality with strings
let name_1 = "Abaan";
let name_2 = "ayaan";
console.log("is name_1 == `Abaan`? I predict true.");
console.log(name_1 == `Abaan`);
console.log("is name_1 == `ayaan`? I predict false");
console.log(name_1 == `ayaan`);
// • Tests using the lower case function
console.log("testing with lower case");
console.log("Abaan".toLowerCase() == "abaan");
//• Numerical tests
let num1 = 5;
let num2 = 10;
console.log("Is num1 < num2? I predict True.");
console.log(num1 < num2); // True
console.log("Is num1 > num2? I predict True.");
console.log(num1 > num2); // false
console.log("Is num2 >= num1? I predict True.");
console.log(num2 >= num1); // True
console.log("Is num2 <= num1? I predict True.");
console.log(num2 <= num1); // false
console.log("Is num1 === num2? I predict False.");
console.log(num1 === num2); // false
console.log("Is num1 != num2? I predict False.");
console.log(num1 != num2); //true
// • Tests using "and" and "or" operators
let x = 5;
let y = 10;
console.log("is x > 2 && y < 12? I predict true");
console.log(x > 2 && y < 12);
console.log("Is x > 3 || y < 8? I predict True.");
console.log(x > 3 || y < 8);
// • Test whether an item is in a array
let numbers = [1, 2, 3, 4, 5];
console.log("Is 3 in numbers array? I predict True.");
console.log(3 in numbers);
// Test whether an item is not in an array
console.log("Is 6 not in numbers array? I predict True.");
console.log(6 in numbers);
export {};
