
///////---------------- Day 12 Coding Challenge-------------------//////////
//==================>>>>>>>>> Task 34
let pizza : string [] = ["cheese","fajita","tomato"]
pizza.forEach(pizza => {
    console.log(`I like ${pizza} pizza`);
})
console.log("I really love pizza!");

//=====================>>>>>> Task 35
let animals : string [] = ["cat","dog","goat"]
animals.forEach(animal => {
    console.log(`A ${animal} would make a great pet`);
})
console.log("Any of these animals would make a great pet!");

//==================>>>>>> Task 36
function makeShirt(size:string, text:string) {
    console.log(`Making a ${size} t-shirt with the message ${text} `);
}
makeShirt("medium","coding is about critical thinking")