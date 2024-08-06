////------------ Day 46 Coding Challenge-----------////
//=============>>>>>> Task 136
for (let i = 1 ; i <= 6 ; i++) {
    console.log(`Iteration ${i}, i value:, i`); 
}

//=========>>>. Task 137
try {
    // Intentionally cause an error
    throw new Error("Something is going wrong");
  } catch (error) {
    // console.log(error.message); // Logs the error message
  }

//=============>>>>> Task 138
// Sample code snippet for setting a breakpoint
console.log("Before breakpoint");
// Set a breakpoint on the following line using your browser's developer tools
console.log(
  "This line has a breakpoint set on it in the browser's developer tools"
);
console.log("After breakpoint");
// To use breakpoints, open this code in your browser, open the developer tools, navigate to the Source tab, find this script, and click on the line number where you want to pause execution. When you reload or run your page, execution will pause at the breakpoint.