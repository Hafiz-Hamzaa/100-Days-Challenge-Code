//////////////-------------- Day 5 Coding Challenge---------------///////////////
//================>>> Task 13
var transports = ["honda", "bike", "civic", "suzukl"];
transports.forEach(function (transport) {
    console.log("I would like to own a ".concat(transport));
});
//===============>>> Task 14
var guestDinner = ["Umer", "Zaid", "Hassan"];
guestDinner.forEach(function (guestDinner) {
    console.log("Dear ".concat(guestDinner, " you are invited to my dinner party"));
});
//==================>>>> Task 15
var changingGuestList = ["Ali", "Zaid", "Hassan"];
changingGuestList.forEach(function (changingGuestList) {
    console.log("Dear ".concat(changingGuestList, " you are invited to my dinner party"));
});
//=====>> Unable to attend the dinner
var cannotAttend = "Ali";
console.log("Sorry ".concat(cannotAttend, " you are not invited for my dinner party"));
//==========> Replace the new guest
var newGuest = "Sufiyan";
changingGuestList[changingGuestList.indexOf(cannotAttend)] = newGuest;
//=============>>>> Print those person who are still invited for dinner 
changingGuestList.forEach(function (changingGuestList) {
    console.log("Dear ".concat(changingGuestList, " you are still invited for my dinner party"));
});
