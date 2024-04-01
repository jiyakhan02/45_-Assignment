//  task: 43
//  solution

// define the orignal array of magicians name

const magicians: string[] = ["Merlin", "David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// function to add "the great" to each magician's name

 function make_great(names: string[]):string[] {
     return names.map(name =>`the great ${name}`);
 }

// function to display magicians names

function showMagicians(names: string[]): void{
    names.forEach(name => console.log(name));
}
// call makegreat with a copy of the orignal array
const greatMagicians: string[] = make_great([...magicians]);

// Display the orignal array of names

console.log("orignal magicians");
showMagicians(magicians);

// Display the array with "the great" added to each name

console.log("magicians with `the great`:");
showMagicians(greatMagicians);
