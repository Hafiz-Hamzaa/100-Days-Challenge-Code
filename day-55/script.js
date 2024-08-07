//===============>>>> Day 55 Challenge
//=========>> We can put any data type in a variables beacuse javascript are called "Dynaically typed"
let number = 12
number = 23.5 // No Error
console.log(number); // number data type
alert(1/0) // Infinity
alert(Infinity); // also direct write infiity
alert(NaN / 2); // NaN

let bigInt = 12345678235676n
let bigInt1 = 876543212348n  // bigint data type
console.log(bigInt + bigInt1);

let name = "Ali"
name = 'Umer'
console.log(name);
console.log(`My friend is ${name}`); // string data type

let isMarried = true
alert(isMarried); // boolean data type

let emptyValue = null // null data type
let age;
console.log(age); // shows undefined 

let uniqueValue = Symbol("Symbol is used for unqiue identifiers")
console.log(uniqueValue) // symbol data type

//==========>>> Object
let student = {
    name : "Hamza",
    age : 19,
    rollNo : 46890
}
console.log(student);
console.log(student.age);
console.log(student['rollNo']);

//======>>> typeof operator
let animal = 'lion'
console.log(typeof animal);
typeof null; typeof 78; typeof true; typeof undefined

let Name = 'Ilya' 
alert(`hello ${Name}`) // hello Ilya
alert(`hello ${"Name"}`) // hello Name
alert(`hello ${1}`) // hello 1

//========>> Interaction 
alert("Hello Hassan");

let aged = prompt("How old are you ?" , 15)
alert(`I am ${aged} years old`);

let isPass = confirm("Are you passed")
alert(isPass);