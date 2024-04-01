//  task : 38
//  solution
function describe_city(city, country) {
    if (country === void 0) { country = "Unknown"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Calling the function for three different cities
describe_city("Karachi", "Pakistan");
describe_city("Paris", "France");
// Using default country value
describe_city("New York");
