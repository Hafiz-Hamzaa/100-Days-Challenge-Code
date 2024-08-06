///////---------------- Day 13 Coding Challenge-------------------//////////
//==================>>>>>>>>> Task 37
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "coding is life"; }
    console.log("This is the ".concat(size, " shirt and ").concat(message, " printed on it"));
}
make_shirt(); //======>>> Deafult large message
make_shirt("medium", "coding is just about logic building"); //=======>>>> Deafult medium message
//===============>>>>>> Task 38
function describeCity(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
describeCity("Karachi");
describeCity("Sawat");
describeCity("Tokyo", "Japan");
//==================>>>>> Task 39
function city_country(city, country) {
    return "".concat(city, " ").concat(country);
}
var response = city_country("Karachi", "Pkaistan");
var result = city_country("Tokyo", "Japan");
var output = city_country("Paris", "France");
console.log(response);
console.log(result);
console.log(output);
