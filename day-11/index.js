/////////------- Day 11 Coding Challenge --------- //////////
//=========>>> Task 31
var userNames = [];
if (userNames.length === 0) {
    console.log("We need to find some users!!");
}
else {
    // greet users
}
//===============>>>>>>>> Task 32
var current_users = ["hammad", "arif", "aqeel", "aman", "abdullah"];
var new_users = ["Hammad", "ahmed", "ali", "aman", "akber"];
new_users.forEach(function (newUser) {
    if (current_users.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " will need to enter a new username."));
    }
    else {
        console.log("".concat(newUser, " is available."));
    }
});
// //=====================>>>>>>>> Task 33
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var number = numbers_1[_i];
    if (number === 1) {
        console.log("".concat(number, "st"));
    }
    else if (number === 2) {
        console.log("".concat(number, "nd"));
    }
    else if (number === 3) {
        console.log("".concat(number, "rd"));
    }
    else {
        console.log("".concat(number, "th"));
    }
}
