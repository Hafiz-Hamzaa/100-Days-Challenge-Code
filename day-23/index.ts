///////------------ Day 23 Coding Challenge------------///////////
//=================>>>>>>>> Task 67
function stringConvertnumber(number1 : number , numberString : string) : number {
    return number1 + Number(numberString)
}
let string_number : number = stringConvertnumber(12 , "45")
console.log(string_number);

//=================>>>>>> Task 68
function multiplytwoDecimals(number_1 : number , number_2 : number) : number {
    return Math.round(number_1 * number_2 * 100) / 100
}
let twoDecimalplaces : number = multiplytwoDecimals(9.8 , 8.9)
console.log(twoDecimalplaces);

//============>>>>>>>> Task 69
function remainderandQuotient(dividend : number , divisor : number) : {quotient : number ; remainder : number} {
    let quotient : number = Math.floor(dividend / divisor)
    let remainder : number = dividend % divisor
    return {quotient ,remainder}
}
let remainder_quotient  = remainderandQuotient(34 , 5)
console.log(remainder_quotient);