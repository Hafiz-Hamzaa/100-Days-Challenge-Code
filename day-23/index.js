///////------------ Day 23 Coding Challenge------------///////////
//=================>>>>>>>> Task 67
function stringConvertnumber(number1, numberString) {
    return number1 + Number(numberString);
}
var string_number = stringConvertnumber(12, "45");
console.log(string_number);
//=================>>>>>> Task 68
function multiplytwoDecimals(number_1, number_2) {
    return Math.round(number_1 * number_2 * 100) / 100;
}
var twoDecimalplaces = multiplytwoDecimals(9.8, 8.9);
console.log(twoDecimalplaces);
//============>>>>>>>> Task 69
function remainderandQuotient(dividend, divisor) {
    var quotient = Math.floor(dividend / divisor);
    var remainder = dividend % divisor;
    return { quotient: quotient, remainder: remainder };
}
var remainder_quotient = remainderandQuotient(34, 5);
console.log(remainder_quotient);
