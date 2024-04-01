// task:20
var countries = [
    "pakistan",
    "dubai",
    "south korea",
    "turki",
    "saudia",
];
console.log("list of countries");
countries.forEach(function (countries, index) {
    console.log("".concat(index + 1, ". ").concat(countries));
});
