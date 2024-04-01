// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var favoriteTransportation = ["Honda motorcycle", "Tesla Model S", "BMW M3", "Toyota Tacoma"];
favoriteTransportation.forEach(function (transport) {
    console.log("\u201CI would like to own a ".concat(transport, ".\u201D"));
});
