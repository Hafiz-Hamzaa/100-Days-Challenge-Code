///////------------ Day 26 Coding Challenge------------///////////
//=================>>>>>>>> Task 76
function addNumbers(Num1, Num2) {
    return Num1 + Num2;
}
var Sum = addNumbers(25, 25);
console.log(Sum);
//===============>>>>> Task 77
function greetsUser(user_name) {
    if (user_name === void 0) { user_name = "anonymous"; }
    console.log("Hello ,".concat(user_name));
}
greetsUser("Umer");
greetsUser();
//===============>>>>> Task 78
function squareDeclaration(number) {
    return number * number;
}
var squareExpression = function (number) {
    return number * number;
};
console.log(squareDeclaration(6));
console.log(squareExpression(6));
