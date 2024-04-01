//  task: 37
//  solution
function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("Creating a ".concat(size, " shirt with the message: \"").concat(message, "\""));
}
// Creating a large shirt with the default message
make_shirt();
// Creating a medium shirt with the default message
make_shirt("Medium");
// Creating a shirt of any size with a different message
make_shirt("Small", "code is life!");
