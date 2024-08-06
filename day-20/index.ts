

///////------------ Day 20 Coding Challenge------------///////////
//=================>>>>>>>> Task 58
function averageScore(...scores : number[]) : number {
    let Total = scores.reduce((sum , score) => sum + score , 0)
    return Total / scores.length
}
let get =  averageScore(78 , 54 , 90 ,89)
console.log(get);
  
//================>>>> Task 59
// This program makes a function that adds a specific number
function makeAdder(valueToAdd: number): (number : any) => number {
    return function (number: number): number {
      return number + valueToAdd;
    };
  }
  
  // Making a magic box that adds 5
  let addFive = makeAdder(5);
  console.log(addFive(10)); 

//===================>>>>> Task 60
let userProfile = () => {
    let userDetails  = {
        name : "Ali",
        age : 21
    }
    return userDetails
}
let Result = userProfile()
console.log(Result);