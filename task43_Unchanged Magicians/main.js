//  task: 43
//  solution
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// define the orignal array of magicians name
var magicians = ["Merlin", "David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
// function to add "the great" to each magician's name
function make_great(names) {
    return names.map(function (name) { return "the great ".concat(name); });
}
// function to display magicians names
function showMagicians(names) {
    names.forEach(function (name) { return console.log(name); });
}
// call makegreat with a copy of the orignal array
var greatMagicians = make_great(__spreadArray([], magicians, true));
// Display the orignal array of names
console.log("orignal magicians");
showMagicians(magicians);
// Display the array with "the great" added to each name
console.log("magicians with `the great`:");
showMagicians(greatMagicians);
