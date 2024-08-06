///////---------------- Day 12 Coding Challenge-------------------//////////
//==================>>>>>>>>> Task 34
var pizza = ["cheese", "fajita", "tomato"];
pizza.forEach(function (pizza) {
    console.log("I like ".concat(pizza, " pizza"));
});
console.log("I really love pizza!");
//=====================>>>>>> Task 35
var animals = ["cat", "dog", "goat"];
animals.forEach(function (animal) {
    console.log("A ".concat(animal, " would make a great pet"));
});
console.log("Any of these animals would make a great pet!");
//==================>>>>>> Task 36
function makeShirt(size, text) {
    console.log("Making a ".concat(size, " t-shirt with the message ").concat(text, " "));
}
makeShirt("medium", "coding is about critical thinking");
