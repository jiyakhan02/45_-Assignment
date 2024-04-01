// task:18

let places: string[] = ["saudia", "dubai", "turki", "south korea"];

// • Print your array in its original order.

console.log("original order:", places);

// • Print your array in alphabetical order.

console.log("Alphabetical Order:", [...places].sort());

// • Show that your array is still in its original order.

console.log("still in orignal order:", places);

// • Print your array in reverse alphabetical order without changing the order of the original list.

console.log("reverse alphabetical ordar:", [...places].sort().reverse());

// • Show that your array is still in its original order by printing it again.

console.log("Still in Original Order:", places);

// • Reverse the order of your list. Print the array to show that its order has changed.

places.reverse();
console.log("reverse order;", places);

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

places.reverse();
console.log("Back to Original Order:", places);

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

places.sort();
console.log("Sorted in Alphabetical Order:", places);

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

places.sort((a, b) => b.localeCompare(a));
console.log("\nSorted in Reverse Alphabetical Order:", places);
