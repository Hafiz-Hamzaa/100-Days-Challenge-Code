///////------------ Day 31 Coding Challenge------------///////////
//=================>>>>>>>> Task 91
var favFruit = ["mango", "apple", "grapes"];
favFruit.push("cherry");
console.log(favFruit);
//================>>>>>> Task 92
function removedElement(arr) {
    return arr.pop();
}
var favouriteFruit = ["orange", "banana", "pear"];
console.log(removedElement(favouriteFruit));
console.log(favouriteFruit);
//===================>>>>>>>>> Task 93
function replaceBananawithMango(fruits) {
    var index = fruits.indexOf("Banana");
    if (index !== -1)
        fruits[index] = "Mango";
}
var fruits = ["Apple", "Banana", "Pear"];
console.log(replaceBananawithMango(fruits));
console.log(fruits);
