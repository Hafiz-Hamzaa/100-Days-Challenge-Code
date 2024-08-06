///////------------ Day 38 Coding Challenge------------///////////
//=================>>>>>>>> Task 112  
var Countries = new Map();
Countries.set("USA", "Washington, D.C."); // Adds USA to the Map
Countries.set("France", "Paris"); // Adds France to the Map
Countries.set("Japan", "Tokyo"); // Adds Japan to the Map
console.log(Countries);
//=============>>>> Task 113
// Answer of Q12:
var country = new Map();
country.set("USA", "Washington, D.C."); // Adds USA to the Map
country.set("France", "Paris"); // Adds France to the Map
country.set("Japan", "Tokyo"); // Adds Japan to the Map
console.log(country);
// // Answer of Q13:
function logCapitalOfCanada(country) {
    if (country.has("Canada")) {
        console.log("The capital of Canada is ".concat(country.get("Canada")));
    }
    else {
        console.log("Canada is not in the Map.");
    }
}
logCapitalOfCanada(country);
//===============>>>>> Task 114
var students = new Map();
students.set(1, "Ali");
students.set(2, "Saad");
students.set(3, "Aman");
students.forEach(function (name, id) {
    console.log("Students Id : ".concat(id, ", Name : ").concat(name));
});
