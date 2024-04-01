//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var person_Name = "Abaan";
// in lowercase
console.log("lowercase:", person_Name.toLowerCase());
//in upparcase
console.log("uppercase:", person_Name.toUpperCase());
// in titlecase
console.log("titlecase:", person_Name.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
