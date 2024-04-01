//  task: 32
//  solution
var current_users = ["Abaaan", "ayaan", "arsalan", "najam", "danish"];
var new_users = ["khizar", "ayaan", "ali", "danish", "anus"];
new_users.forEach(function (newUser) {
    if (current_users.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " will need to entar a new username."));
    }
    else {
        console.log("".concat(newUser, " is available."));
    }
});
