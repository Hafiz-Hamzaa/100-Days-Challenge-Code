///////------------ Day 16 Coding Challenge------------///////////
//=================>>>>>>>> Task 46
function describe(make : string , model : string , year : number) {
    let laptop_details = {
        make : "Dell",
        model : "New Elite Series",
        year : 2024
    }
    console.log(`The laptop is a ${year} ${make} ${model}`);
}
describe("Dell","New Elite Series",2024)

//===================>>>>>>> Task 47
let laptops = [
    { make: "Dell", model: "XPS 15", year: 2021 },
    { make: "Apple", model: "MacBook Pro", year: 2020 },
    { make: "HP", model: "Spectre x360", year: 2021 }
  ];
  let [laptop1, laptop2,laptop3] = laptops;
  console.log(laptop1);
  console.log(laptop2);
  console.log(laptop3);

//====================>>>>>> Task 48
let pricesSet1 = [1400, 1600, 1100];
let pricesSet2 = [1000, 1500, 1800];
let combinedPrices = [...pricesSet1, ...pricesSet2].sort((a, b) => a - b);
console.log(combinedPrices); //=====>> Arranged sequence prices by using sort method
