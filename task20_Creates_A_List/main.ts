// task:20

let countries: string[] = [
  "pakistan",
  "dubai",
  "south korea",
  "turki",
  "saudia",
];

console.log("list of countries");
countries.forEach((countries, index) => {
  console.log(`${index + 1}. ${countries}`);
});
