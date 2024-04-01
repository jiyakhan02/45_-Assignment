//  task: 37
//  solution

function make_shirt(size: string = "Large", message: string = "I love TypeScript") {
    console.log(`Creating a ${size} shirt with the message: "${message}"`);
}

// Creating a large shirt with the default message
make_shirt();

// Creating a medium shirt with the default message
make_shirt("Medium");

// Creating a shirt of any size with a different message
make_shirt("Small", "code is life!");