//  task: 45
//  solution

// function to store information about a car in an object

function createCar(
  manufacturer: string,
  model: string,
  ...options: [string, any][]
): object {
  const car: { manufacturer: string; model: string; [key: string]: any } = {
    manufacturer: manufacturer,
    model: model,
  };

  // add additional options to the car object

  for (const key in options) {
    car[key] = options[key];
  }

  return car;
}

// call the function with required information and additional options

const mycar = createCar("toyota", "camry", ["color", "red"], ["year", 2022]);

// print the object returned by the function
console.log(mycar);
