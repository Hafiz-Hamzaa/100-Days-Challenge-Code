///////------------ Day 29 Coding Challenge------------///////////
//=================>>>>>>>> Task 85
function codePosition(text : string) {
    return text.indexOf("code")
}
console.log(codePosition("Learn to code to type script")); //=====>> output = 9

//================>>>>>>> Task 86
function JavaScript(str : string) : boolean {
    return str.includes("Java Script")
}
console.log(JavaScript("Type Script is a superset of Java Script"));

//=================>>> Task 87
function subString(str : string) : string {
    return str.substring(0 , 10)
}
console.log(subString("Type Script is a programming language"));