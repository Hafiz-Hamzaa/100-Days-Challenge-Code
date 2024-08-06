var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//////////////------------------- Day 6 Coding Challenge----------------///////////////////////
//==================>>>> Task 16
var moreGuest = ["Asma", "Abeeha", "Laiba"];
console.log('Great News! I just a found a bigger table');
//=======> Beginning of an array
moreGuest.unshift("Areeba");
//=========> Middle of an array
moreGuest.splice(moreGuest.length / 2, 0, "Hina");
//===========>>> Ending of an array
moreGuest.push("Afsha");
//================>>>>> Print each guest 
moreGuest.forEach(function (moreGuest) {
    console.log("Dear ".concat(moreGuest, " you all are join to me for my dinner party"));
});
//================>>>>>> Task 17
//=====>>. same task no 16 .=======>>//
var moreGuests = ["Asma", "Abeeha", "Laiba", "Amna"];
console.log('Great News! I just a found a bigger table');
//=======> Beginning of an array
moreGuests.unshift("Areeba");
//=========> Middle of an array
moreGuests.splice(moreGuests.length / 2, 0, "Hina");
//===========>>> Ending of an array
moreGuest.push("Afsha");
//================>>>>> Print each guest 
moreGuests.forEach(function (moreGuests) {
    console.log("Dear ".concat(moreGuests, " you all are join to me for my dinner party"));
});
//===========>> Task 17
console.log("Sorry!! for the limited seats only two people invited for dinner party");
while (moreGuests.length > 2) {
    var removedGuest = moreGuests.pop();
    console.log("Sorry!! you both ".concat(removedGuest, " are no longer for dinner party "));
}
moreGuests.pop();
moreGuests.pop();
//=====>> Print two people who are invited
moreGuests.forEach(function (moreGuests) {
    console.log("Dear ".concat(moreGuests, " you are still for invited for dinner party."));
});
//=====>> Final Guest List
console.log("Final Guest List :", moreGuests);
//=================>>>>> Task 18
var places = ["Saudia", "Lahore", "Dubai", "Iran", "Autralia"];
console.log("Original Order :", places); //....... Original Order.......//
console.log("Alphabetical Order :", __spreadArray([], places, true).sort()); //....... Alphabetical Order.......//
console.log("Original Order :", places); //....... Original Order.......//
console.log("Reverse Order :", __spreadArray([], places, true).reverse()); //....... Reverse Order.......//
console.log("Original Order :", places); //....... Original Order.......//
places.reverse();
console.log("Reverse Order :", places);
places.reverse();
console.log("Reverse Order :", places);
places.sort();
console.log("Alphabetical Order :", places);
places.reverse();
console.log("Reverse Alphabetical Order :", places);
