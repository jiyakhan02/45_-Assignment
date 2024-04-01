//  task: 44
//  solution

// function to print a summary of the sandwich ordered

function orderSandwich(...items: string[]): void {
    console.log("sandwich summary:");

if (items.length === 0) {
    console.log("no item added to the sandwich.");
    
} else {
    console.log("item on the sandwich:");
    items.forEach(item => console.log("-" + item));
}
console.log("------------------------");
}

// call the function three times with different numbers of arguments

orderSandwich("ham","cheese","tamato");
orderSandwich("turkey","bacon","avocado");
orderSandwich("peanut butter","jelly");
