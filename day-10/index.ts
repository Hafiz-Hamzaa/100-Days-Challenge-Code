
//////////-------------- Day 10 Coding Challenge-------------//////////////
//=============>>>>> Task 28
let age: number = 25;
if (age < 2) {
  console.log("The person is a baby.");
} else if (age < 4) {
  console.log("The person is a toddler.");
} else if (age < 13) {
  console.log("The person is a kid.");
} else if (age < 20) {
  console.log("The person is a teenager.");
} else if (age < 65) {
  console.log("The person is an adult.");
} else {
  console.log("The person is an elder.");
}

//==============>>>>> Task 29
let favouriteFruits : string [] = ["cherry","mango","apple"]
if (favouriteFruits.includes("cherry")) {
    console.log("You really like cherry");
}
if (favouriteFruits.includes("mango")) {
    console.log("You really like mango");
}
if (favouriteFruits.includes("apple")) {
    console.log("You really like apple");
}

//==============>>>>> Task 30
let usernames: string[] = ["admin", "ahmed", "ali", "akber", "arif"];
usernames.forEach((username) => {
  if (username == "admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${username}, thank you for loggin in again.`);
  }
});