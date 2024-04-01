//  task: 32
//  solution

let current_users: string[] = ["Abaaan","ayaan","arsalan","najam","danish"];
let new_users: string[] = ["khizar","ayaan","ali","danish","anus"];

new_users.forEach(newUser => {
    if (current_users.some(currentUser => currentUser.toLowerCase() === newUser .toLowerCase())) {
   console.log(`${newUser} will need to entar a new username.`)
    } else {
        console.log(`${newUser} is available.`);
    }
});