var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
///////------------ Day 16 Coding Challenge------------///////////
//=================>>>>>>>> Task 46
function describe(make, model, year) {
    var laptop_details = {
        make: "Dell",
        model: "New Elite Series",
        year: 2024
    };
    console.log("The laptop is a ".concat(year, " ").concat(make, " ").concat(model));
}
describe("Dell", "New Elite Series", 2024);
//===================>>>>>>> Task 47
var laptops = [
    { make: "Dell", model: "XPS 15", year: 2021 },
    { make: "Apple", model: "MacBook Pro", year: 2020 },
    { make: "HP", model: "Spectre x360", year: 2021 }
];
var laptop1 = laptops[0], laptop2 = laptops[1], laptop3 = laptops[2];
console.log(laptop1);
console.log(laptop2);
console.log(laptop3);
//====================>>>>>> Task 48
var pricesSet1 = [1400, 1600, 1100];
var pricesSet2 = [1000, 1500, 1800];
var combinedPrices = __spreadArray(__spreadArray([], pricesSet1, true), pricesSet2, true).sort(function (a, b) { return a - b; });
console.log(combinedPrices); //=====>> Arranged sequence prices by using sort method
