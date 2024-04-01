//  task : 38
//  solution

function describe_city(city: string, country: string = "Unknown") {
    console.log(`${city} is in ${country}.`);
}

// Calling the function for three different cities
describe_city("Karachi", "Pakistan");
describe_city("Paris", "France");

// Using default country value

describe_city("New York");