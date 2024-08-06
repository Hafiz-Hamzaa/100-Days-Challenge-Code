
/////////------- Day 11 Coding Challenge --------- //////////
//=========>>> Task 31
let userNames : string [] = []
if (userNames.length === 0) {
    console.log("We need to find some users!!");
}else {
    // greet users
}

//===============>>>>>>>> Task 32
let current_users: string[] = ["hammad","arif","aqeel","aman","abdullah"];
let new_users: string[] = ["Hammad","ahmed","ali","aman","akber"];

new_users.forEach((newUser) => {
  if (
    current_users.some(
      (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
    )
  ) {
    console.log(`${newUser} will need to enter a new username.`);
  } else {
    console.log(`${newUser} is available.`);
  }
});

// //=====================>>>>>>>> Task 33
let numbers : number[] = [1,2,3,4,5,6,7,8,9] 
for (let number of numbers) {
    if (number === 1) {
        console.log(`${number}st`);
        
    }else if (number === 2) {
        console.log(`${number}nd`);
        
    }else if (number === 3) {
        console.log(`${number}rd`);
        
    }else {
        console.log(`${number}th`);
        
    }
}