//  task: 41
//  solution
var magicians = ["Alice", "david", "charis"];
// Define a functionto show magicians
function show_Magicians(name) {
    console.log("magicians:");
    name.forEach(function (name) { return console.log(name); });
}
// Call the function and pass the array of magician's names
show_Magicians(magicians);
