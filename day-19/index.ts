
///////------------ Day 19 Coding Challenge------------///////////
//=================>>>>>>>> Task 55
// Starts with a list of numbers
let Numbers = [2, 4, 6, 10, 13];

// Doubles each number
let doubledNumbers = Numbers.map((Number) => Number * 2);
console.log(doubledNumbers); // Output: [4, 8, 12, 20, 26]

//==============>>>>>> Task 56
let mixedArray  = ["Coding", 134 , true , "100 Days Coding Challenge" , 128 , "Type Script"]
let ArrayString = mixedArray.filter((item => typeof item == "string")) // only string
console.log(ArrayString); //=====>>> 'Coding' ' 100 Days Coding Challenge ' Type Script ' 

//=================>>>>>> Task 57
// A list of grades
let grades = [87 , 43 , 78 , 90 , 84]

//==============>>>> Calculate Average Grade
let averageGrade =
  grades.reduce((total , grade) => total + grade) / grades.length

//=============>>>>> Show Average Grade
console.log(averageGrade);