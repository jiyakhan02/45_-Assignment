// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array.
// • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
var guests = ["arsalan", "abaan", "ayaan", "najam"];
var cantMakeit = "arsalan";
var newGuest = "danish";
guests[guests.indexOf(cantMakeit)] = newGuest;
console.log(guests);
guests.forEach(function (guests) {
    console.log("dear ".concat(guests, ", i found a bigger dinner table so i am invited more guest."));
});
//• Add one new guest to the beginning of your array.
var guestbeg = "Ali";
guests.unshift("Ali");
console.log(guests);
//• Add one new guest to the middle of your array.
var middleGuest = "khizar";
var middleindex = guests.length / 2;
guests.splice(middleindex, 0, middleGuest);
console.log(guests);
//• Use append() to add one new guest to the end of your list.
guests.push("daniyal");
console.log(guests);
//• Print a new set of invitation messages, one for each person in your list.
guests.forEach(function (guests) {
    console.log("dear ".concat(guests, ",  please join us for dinner!"));
});
