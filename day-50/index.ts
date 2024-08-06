
////------------ Day 50 Coding Challenge-----------////
//=============>>>>>> Task 148  
setTimeout(() => {
    console.log("This message is shown after a 2-second delay.");
  }, 2000);
  // This showcases how to use setTimeout to delay actions in your code.

 //==========>>>>> Task 149
 console.log("Start");

 setTimeout(() => {
   console.log("Callback executed");
 }, 0);
 
 console.log("End");
 // Although the timeout is 0, "Callback executed" is logged after "End" due to the event loop.

 //================>>>>> Task 150
 // Synchronous example
console.log("Before synchronous operation");

for (let i = 0; i < 1e9; i++) {} // A long loop
console.log("After synchronous operation");

// Asynchronous example
console.log("Before asynchronous operation");
setTimeout(() => {
  console.log("Asynchronous operation completed");
}, 1000);
console.log("After asynchronous operation setup");