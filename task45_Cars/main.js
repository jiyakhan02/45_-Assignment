//  task: 45
//  solution
// function to store information about a car in an object
function createCar(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    // add additional options to the car object
    for (var key in options) {
        car[key] = options[key];
    }
    return car;
}
// call the function with required information and additional options
var mycar = createCar("toyota", "camry", ["color", "red"], ["year", 2022]);
// print the object returned by the function
console.log(mycar);
