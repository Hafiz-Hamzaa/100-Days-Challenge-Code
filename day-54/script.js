

//============>>> Day 54 Challenge
alert("I'm Javascript")
//========>>> Varables
let message; //=====>>> declaration part
message = "this is an initialization part" //=======>> initialize value
console.log(message);
// To be concise, we can combine the variable declaration and assignment into a single line:
let user = "Hamza"
console.log(user); 
// ==============>>> Day 54 Challenge
//========>>> Variable Naming
// let 123abc ;  -- not started with digits
// let @abc ; -- only $  or _ are allowed not any special character  
// let full name ; --- not even spacing allowed ---
// let for ; let while ; --- reserved words not allow to set a variable name --- 
let fullName ; let user_name ; let _user ; let $user ; let user123 // ====>> Right way 

//======>> to declare  a variable using keyword var.....
var fruits = "apple"
fruits = "mango" // re-assignment
console.log(fruits);
// var allowed to re-declared
var fruits = "banana"
console.log(fruits);

//======>>> to declare a variable using keyword let
let vegetables = "carrot"
vegetables = "onion" // re-assignment
console.log(vegetables);
// let not allowed to re-declared
// let vegetables;

//========>>> to declare a variable using keyword const
// const declaration must be initialized
const furniture = "chair"
// furniture = "table" // not allowed to re-declared and re-assignment 
console.log(furniture);