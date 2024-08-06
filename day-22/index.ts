///////------------ Day 22 Coding Challenge------------///////////
//=================>>>>>>>> Task 64
function combineStringandNumber(text : string , number : number) : string {
    return text + number
}
let stringOutput : string = combineStringandNumber("Age : ", 56)
console.log(stringOutput);

//=============>>>>>> Task 65
function remainder(first_num : number , second_num : number) : number {
    return first_num % second_num
}
let leftOver : number = remainder(15 , 2)
console.log(leftOver);

//===========>>>>> Task 66
function checkBothvalue(value1 : boolean , value2 : boolean) : boolean {
    return value1 && value2
}
let boolean : boolean = checkBothvalue(true , false)
console.log(boolean);