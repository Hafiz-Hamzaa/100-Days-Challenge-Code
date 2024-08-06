
////------------ Day 49 Coding Challenge-----------////
//=============>>>>>> Task 145
// This function accepts a callback function and invokes it with given arguments
function executeCallback(
    callback: (arg1: number, arg2: number) => void,
    arg1: number,
    arg2: number
  ): void {
    callback(arg1, arg2); 
  }
  const Add = (a: number, b: number) => {
    console.log(a + b); 
  };
  
  executeCallback(Add, 10 , 9); // Outputs: 19

//==============>>>>> Task 146
// This array of numbers will be filtered
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12];
const filteredNumbers: number[] = numbers.filter((number) => number > 6);
console.log(filteredNumbers); // Outputs: [6, 7, 8, 9, 10]

//============>>>>> Task 147
function fetchdata(
    callback: (error: Error | null, data?: string) => void
  ): void {
    // Simulating an error condition
    const error = new Error("Failed to fetch data");
    const data = "Some data";

    if (Math.random() > 0.5) {
      callback(null, data); 
    } else {
      callback(error); 
    }
  }
  // Using the fetchData function with error handling in the callback
  fetchdata((error, data) => {
    if (error) {
      console.error(error.message); 
    } else {
      console.log(data); 
    }
  });