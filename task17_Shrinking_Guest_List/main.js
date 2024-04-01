// task: 17
var guests = ["Ali", "danish", "khizar", "abaan", "ayaan", "najam"];
// Print original invitation messages
console.log("Original Guests:");
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", please join us for dinner!"));
});
console.log("\nWe just found out that our new dinner table won’t arrive in time for the dinner. We can only invite two people for dinner.");
// Remove guests until only two names remain
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry ".concat(removedGuest, ", we can't invite you to dinner."));
}
// Print invitation messages for the two remaining guests
guests.forEach(function (guest) {
    console.log("dear ".concat(guest, ", you are still invited to dinner."));
});
// Remove the last two names
guests.pop();
guests.pop();
// Print to verify empty list
guests.splice(0, guests.length);
console.log(guests);
