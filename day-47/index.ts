
////------------ Day 47 Coding Challenge-----------////
//=============>>>>>> Task 139
//=====>>> const reserved word for creating a variable and store he value a variable
const userName : string = "Hassan"

//=========>>>>> if reserved word used for specify the condition if the condition is true if block i execute
if (userName === "Hassan") {
    console.log(`${userName} is your friend`);
}else {
    console.log(`${userName} is not your friend`);
}

//===========>>>> return kew word used to exit a function and return a value that function
function add(a : any , b : any)  {
    return a + b
}
console.log(add(6 , 7));

//==========>>>>> Task 140
// let function = 5; // This line would cause a syntax error

console.log(
    "Using a reserved word as a variable name causes a syntax error in JavaScript."
  );

//============>>>> Task 141
async function fetchData() {
    const data = await fetchData();
    console.log(data);
  }
  console.log(
    "The 'await' keyword allows asynchronous, promise-based behavior to be written in a cleaner, more linear fashion."
  );