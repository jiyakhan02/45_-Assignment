//  task : 30
//  solution

let usernames: string[] = ["admin", "Eric","abaan","ayaan","arsalan"];

for (let username of usernames) {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
}
}