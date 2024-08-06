///////------------ Day 20 Coding Challenge------------///////////
//=================>>>>>>>> Task 58
function averageScore() {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    var Total = scores.reduce(function (sum, score) { return sum + score; }, 0);
    return Total / scores.length;
}
var get = averageScore(78, 54, 90, 89);
console.log(get);
//================>>>> Task 59
// This program makes a function that adds a specific number
function makeAdder(valueToAdd) {
    return function (number) {
        return number + valueToAdd;
    };
}
// Making a magic box that adds 5
var addFive = makeAdder(5);
console.log(addFive(10));
//===================>>>>> Task 60
var userProfile = function () {
    var userDetails = {
        name: "Ali",
        age: 21
    };
    return userDetails;
};
var Result = userProfile();
console.log(Result);
