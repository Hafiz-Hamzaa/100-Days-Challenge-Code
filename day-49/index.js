////------------ Day 49 Coding Challenge-----------////
//=============>>>>>> Task 145
// This function accepts a callback function and invokes it with given arguments
function executeCallback(callback, arg1, arg2) {
    callback(arg1, arg2);
}
var Add = function (a, b) {
    console.log(a + b);
};
executeCallback(Add, 10, 9); // Outputs: 19
//==============>>>>> Task 146
// This array of numbers will be filtered
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var filteredNumbers = numbers.filter(function (number) { return number > 6; });
console.log(filteredNumbers); // Outputs: [6, 7, 8, 9, 10]
//============>>>>> Task 147
function fetchdata(callback) {
    // Simulating an error condition
    var error = new Error("Failed to fetch data");
    var data = "Some data";
    if (Math.random() > 0.5) {
        callback(null, data);
    }
    else {
        callback(error);
    }
}
// Using the fetchData function with error handling in the callback
fetchdata(function (error, data) {
    if (error) {
        console.error(error.message);
    }
    else {
        console.log(data);
    }
});
