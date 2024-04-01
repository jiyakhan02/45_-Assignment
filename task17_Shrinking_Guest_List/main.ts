// task: 17

let guests: string[] = ["Ali", "danish", "khizar", "abaan", "ayaan", "najam"];

// Print original invitation messages

console.log("Original Guests:");
guests.forEach((guest) => {
  console.log(`Dear ${guest}, please join us for dinner!`);
});

console.log(
  "\nWe just found out that our new dinner table won’t arrive in time for the dinner. We can only invite two people for dinner."
);

// Remove guests until only two names remain
while (guests.length > 2) {
  const removedGuest = guests.pop();
  console.log(`Sorry ${removedGuest}, we can't invite you to dinner.`);
}

// Print invitation messages for the two remaining guests

guests.forEach((guest) => {
  console.log(`dear ${guest}, you are still invited to dinner.`);
});

// Remove the last two names

guests.pop();
guests.pop();

// Print to verify empty list

guests.splice(0, guests.length);
console.log(guests);
