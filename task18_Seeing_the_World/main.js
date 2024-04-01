// task:18
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["saudia", "dubai", "turki", "south korea"];
// • Print your array in its original order.
console.log("original order:", places);
// • Print your array in alphabetical order.
console.log("Alphabetical Order:", __spreadArray([], places, true).sort());
// • Show that your array is still in its original order.
console.log("still in orignal order:", places);
// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log("reverse alphabetical ordar:", __spreadArray([], places, true).sort().reverse());
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
places.sort(function (a, b) { return b.localeCompare(a); });
console.log("\nSorted in Reverse Alphabetical Order:", places);
