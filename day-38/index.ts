
///////------------ Day 38 Coding Challenge------------///////////
//=================>>>>>>>> Task 112  
const Countries = new Map<string, string>();
Countries.set("USA", "Washington, D.C."); // Adds USA to the Map
Countries.set("France", "Paris"); // Adds France to the Map
Countries.set("Japan", "Tokyo"); // Adds Japan to the Map
console.log(Countries);

//=============>>>> Task 113
// Answer of Q12:
let country = new Map<string, string>();
country.set("USA", "Washington, D.C."); // Adds USA to the Map
country.set("France", "Paris"); // Adds France to the Map
country.set("Japan", "Tokyo"); // Adds Japan to the Map
console.log(country);

// // Answer of Q13:
function logCapitalOfCanada(country: Map<string, string>): void {
  if (country.has("Canada")) {
    console.log(`The capital of Canada is ${country.get("Canada")}`);
  } else {
    console.log("Canada is not in the Map.");
  }
}
logCapitalOfCanada(country);
  
//===============>>>>> Task 114
const students = new Map<number , string>()
students.set(1,"Ali")
students.set(2,"Saad")
students.set(3,"Aman") 
students.forEach((name , id)=> {
    console.log(`Students Id : ${id}, Name : ${name}`);
})