///////------------ Day 31 Coding Challenge------------///////////
//=================>>>>>>>> Task 91
let favFruit : string [] = ["mango","apple","grapes"]
favFruit.push("cherry")
console.log(favFruit);

//================>>>>>> Task 92
function removedElement<T>(arr : T[]): T | undefined {
    return arr.pop()
}
const favouriteFruit : string [] = ["orange","banana","pear"] 
console.log(removedElement(favouriteFruit));
console.log(favouriteFruit);

//===================>>>>>>>>> Task 93
function replaceBananawithMango(fruits : string []) :void {
    const index = fruits.indexOf("Banana")
    if (index !== -1)fruits[index] = "Mango"
}
const fruits : string [] = ["Apple","Banana","Pear"]
console.log(replaceBananawithMango(fruits));
console.log(fruits);