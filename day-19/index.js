///////------------ Day 19 Coding Challenge------------///////////
//=================>>>>>>>> Task 55
// Starts with a list of numbers
var Numbers = [2, 4, 6, 10, 13];
// Doubles each number
var doubledNumbers = Numbers.map(function (Number) { return Number * 2; });
console.log(doubledNumbers); // Output: [4, 8, 12, 20, 26]
//==============>>>>>> Task 56
var mixedArray = ["Coding", 134, true, "100 Days Coding Challenge", 128, "Type Script"];
var ArrayString = mixedArray.filter((function (item) { return typeof item == "string"; })); // only string
console.log(ArrayString); //=====>>> 'Coding' ' 100 Days Coding Challenge ' Type Script ' 
//=================>>>>>> Task 57
// A list of grades
var grades = [87, 43, 78, 90, 84];
//==============>>>> Calculate Average Grade
var averageGrade = grades.reduce(function (total, grade) { return total + grade; }) / grades.length;
//=============>>>>> Show Average Grade
console.log(averageGrade);
