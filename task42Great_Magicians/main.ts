//  task: 42
//  solution

let magicians: string[] = ["Merlin", "David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// Define a function to show magicians
function showMagicians(names: string[]): void {
    console.log("Magicians:");
    names.forEach(name => console.log(name));
}

// Define a function to make magicians great
function makeGreat(names: string[]): string[] {
    return names.map(name => `the Great ${name}`);
}

// Modify the array of magicians
magicians = makeGreat(magicians);

// Call the function to show magicians
showMagicians(magicians);