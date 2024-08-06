///////------------ Day 32 Coding Challenge------------///////////
//=================>>>>>>>> Task 94
var words = ["java", "python", "type script"];
var lengths = words.map((function (word) { return word.length; }));
console.log(lengths);
//==================>>>>> Task 95
function filterGreaterthanTen(numbers) {
    return numbers.filter((function (number) { return number > 10; }));
}
var numbers = [1, 4, 9, 45, 90, 78];
console.log(filterGreaterthanTen(numbers));
console.log(numbers);
//================>>>>>>> Task 96
function calculateSum(sum) {
    return sum.reduce(function (sum, total) { return sum + total; }, 0);
}
var sums = [2, 4, 6, 2];
console.log(calculateSum(sums));
console.log(sums);
