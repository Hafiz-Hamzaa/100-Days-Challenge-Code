///////------------ Day 36 Coding Challenge------------///////////
//=================>>>>>>>> Task 106
function leapYear(year : number) : boolean {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}
console.log(leapYear(2020)); //===>> true
console.log(leapYear(1900)); //===>> false

//============>>>>>>> Task 107
function isDivisibleByTwoAndThree(number: number): boolean {
    return number % 2 === 0 && number % 3 === 0;
  }
  console.log(isDivisibleByTwoAndThree(12)); // Outputs: true
  console.log(isDivisibleByTwoAndThree(19)); // Outputs: false

//================>>>>> Task 108
function areStringsEqualIgnoreCase(str1: string, str2: string): boolean {
    return str1.toLowerCase() === str2.toLowerCase();
  }
  
  console.log(areStringsEqualIgnoreCase("java", "Java")); // Outputs: true
  console.log(areStringsEqualIgnoreCase("world", "Word")); // Outputs: false  