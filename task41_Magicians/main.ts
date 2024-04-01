//  task: 41
//  solution

let magicians: string[] = ["Alice", "david", "charis"];

// Define a functionto show magicians

function show_Magicians(name: string[]):void {
  
    console.log("magicians:");
    name.forEach(name => console.log(name));
  }

// Call the function and pass the array of magician's names

show_Magicians(magicians);