///////------------Day 25 Coding Challenge------------///////////
//=================>>>>>>>> Task 73
function updatedVariable() {
    var vehicle = "car";
    console.log("Initial vaule : ", vehicle); //======>>> Initial
    vehicle = "truck";
    console.log("Updated value : ", vehicle); //=====>>> Updated
}
updatedVariable();
//================>>>>>> Task 74
function swapValues() {
    var a = 45, b = 70;
    console.log("Before swap a :", a, "b :", b);
    var temp = a;
    a = b;
    b = temp;
    console.log("After swap a :", a, "b :", b);
}
swapValues();
//============>>>>>>> Task 75
// This function uses compound assignment operators for different operations
function useCompoundOperators() {
    var x = 5; // Starts with x equal to 5
    console.log("Initial x:", x);
    x += 3;
    console.log("After addition:", x); // Shows x after addition
    x -= 2;
    console.log("After subtraction:", x); // Shows x after subtraction
    x *= 4;
    console.log("After multiplication:", x); // Shows x after multiplication
    x /= 2;
    console.log("After division:", x); // Shows x after division
}
useCompoundOperators();
