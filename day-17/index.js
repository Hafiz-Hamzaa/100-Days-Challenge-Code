///////------------ Day 17 Coding Challenge------------///////////
//=================>>>>>>>> Task 49
function log_hobbies() {
    var hobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobbies[_i] = arguments[_i];
    }
    hobbies.forEach(function (hobby) {
        console.log(" I enjoy ".concat(hobby));
    });
}
log_hobbies("coding", "study", "playing");
//==============>>>>>>>>>> Task 50
var myidealDay = "My ideal day hobbies include : \n* Early in the morning and offer namaz-e-efajar.\n* Then college study and some hours to write a code on my pc.\n* At the end of the day fee some hours spent with my family. ";
//=====>>>> Logging all activity to the console
console.log(myidealDay);
//=============>>>>>>> Task 51
//=======>>> Original function
function calculateArea(width, height) {
    return width * height;
}
//=======>>>>> Refactor into Arrow function
var calculateareaRectangle = function (width, height) {
    return width * height;
};
console.log(calculateareaRectangle(4, 7)); //====>> logs width and height
