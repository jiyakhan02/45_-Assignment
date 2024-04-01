//  task: 42
//  solution
var magicians = ["Merlin", "David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
// Define a function to show magicians
function showMagicians(names) {
    console.log("Magicians:");
    names.forEach(function (name) { return console.log(name); });
}
// Define a function to make magicians great
function makeGreat(names) {
    return names.map(function (name) { return "the Great ".concat(name); });
}
// Modify the array of magicians
magicians = makeGreat(magicians);
// Call the function to show magicians
showMagicians(magicians);
