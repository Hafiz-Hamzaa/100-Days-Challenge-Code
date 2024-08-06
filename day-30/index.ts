///////------------ Day 30 Coding Challenge------------///////////
//=================>>>>>>>> Task 88
function strNumber(str : string) : number {
    return Number(str)
}
console.log(strNumber("235"));

//==========>>>> Task 89
function twoDecimal(number : number) : number {
    return Number(number.toFixed(2))
}
console.log(twoDecimal(67.8432));

//==================>>> Task 90
function randomNum() {
    return Math.floor(Math.random() * 10 + 1)
}
console.log(randomNum());