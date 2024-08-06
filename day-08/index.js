//////////----------------- Day 8 Coding Challenge-------------//////////////
//===============>>>>>> Task 22
var vegetables = ["onion", "carrot", "ladyfinger"];
console.log(vegetables[3]); // Intentional Error : beacause the index sart with zero an in this array only index 0 , 1 , 2 are fall not a 3 index are fall
vegetables[1] = "carrot"; // =========>>> Correct index
//===============>>>>>>>> Task 23
// 5 statement become true:
var car = "subaru";
console.log("is car == 'subaru'? predict true");
console.log(car == 'subaru');
console.log("is car != 'honda city'? predict true");
console.log(car != 'honda city');
console.log("is car.length == 6? predict true");
console.log(car.length == 6);
console.log("is 10 < 35? predict true");
console.log(10 < 35);
console.log("is car.length != 10? predict true");
console.log(car.length != 10);
// 5 statement become false:
console.log("is car.length == 8? predict false");
console.log(car.length == 8);
console.log("is car == 'Subaru'? predict false");
console.log(car == 'Subaru');
console.log("is car == 'SUBARU'? predict false");
console.log(car == 'SUBARU');
console.log("is car == 'honda city'? predict false");
console.log(car == 'honda city');
console.log("is 10 > 55? predict false");
console.log(10 > 55);
//===============>>>>>>> Task 24
//========>>>. More Conditional Tests 
// • Tests for equality and inequality with strings
console.log("orange" == "orange"); // true
console.log("apple" != "apple"); // false
// • Tests using the lower case function
console.log("ARTIFICIAL INTELLIGENCE".toLowerCase() == "artificial intelligence"); // true
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log(2 == 2); // true
console.log(45 != 45); // false
console.log(23 > 12); // true
console.log(3 < 2); // false
console.log(12 <= 12); // true
console.log(48 >= 50); // false
// • Tests using "and" and "or" operators
console.log(35 == 35 && 6 < 12); // true
console.log(12 != 12 || 9 > 15); // false
// • Test whether an item is in a array
var toys = ["doll", "car", "bike"];
console.log(toys.includes("doll")); // true
// • Test whether an item is not in a array
console.log(!toys.includes("ball")); // true
