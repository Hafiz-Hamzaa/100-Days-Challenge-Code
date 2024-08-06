///////------------ Day 32 Coding Challenge------------///////////
//=================>>>>>>>> Task 94
let words : string [] = ["java","python","type script"]
let lengths : number [] = words.map((word => word.length)) 
console.log(lengths);

//==================>>>>> Task 95
function filterGreaterthanTen(numbers : number[]) : number[] {
    return numbers.filter((number => number > 10))
}
const numbers : number [] = [1 , 4 , 9 , 45 , 90 , 78]
console.log(filterGreaterthanTen(numbers));
console.log(numbers);

//================>>>>>>> Task 96
function calculateSum(sum : number[]) : number {
    return sum.reduce((sum ,total) => sum + total , 0)
}
 const sums : number [] = [2 , 4 , 6, 2]
 console.log(calculateSum(sums));
 console.log(sums);