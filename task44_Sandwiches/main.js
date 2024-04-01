//  task: 44
//  solution
// function to print a summary of the sandwich ordered
function orderSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("sandwich summary:");
    if (items.length === 0) {
        console.log("no item added to the sandwich.");
    }
    else {
        console.log("item on the sandwich:");
        items.forEach(function (item) { return console.log("-" + item); });
    }
    console.log("------------------------");
}
// call the function three times with different numbers of arguments
orderSandwich("ham", "cheese", "tamato");
orderSandwich("turkey", "bacon", "avocado");
orderSandwich("peanut butter", "jelly");
