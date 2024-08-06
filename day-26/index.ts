///////------------ Day 26 Coding Challenge------------///////////
//=================>>>>>>>> Task 76
function addNumbers(Num1 : number , Num2 : number) : number {
    return Num1 + Num2
}
let Sum : number = addNumbers(25 , 25)
console.log(Sum);

//===============>>>>> Task 77
function greetsUser(user_name : string = "anonymous") {
    console.log(`Hello ,${user_name}`);
}
greetsUser("Umer")
greetsUser()

//===============>>>>> Task 78
function squareDeclaration(number : number) : number {
    return number * number 
}
const squareExpression = function(number : number) {
    return number * number
}
console.log(squareDeclaration(6));
console.log(squareExpression(6));