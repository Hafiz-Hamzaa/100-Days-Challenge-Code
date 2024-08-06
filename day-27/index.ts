
///////------------ Day 27 Coding Challenge------------///////////
//=================>>>>>>>> Task 79
let carObject = {
    make : "Honda",
    model : "Civic",
    year : 2019
}
console.log(carObject.model);

//==========>>>> Task 80
//======>>>> Updating car object
let car_obj = {
    make : "Honda",
    model : "Civic",
    year : 2021,
    color : "white"
}
console.log(car_obj);

// //==============>>>> Task 81
function logObjectProperties(obj: any) {
    for (let property in obj) {
      // Loops through each property in the object
      console.log(`${property}: ${obj[property]}`);
    }
  }
  
  // Using the function with a car object
  logObjectProperties({
    make: "Toyota",
    model: "Corolla",
    year: 2011,
    color: "black",
  });