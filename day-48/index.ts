
////------------ Day 48 Coding Challenge-----------////
//=============>>>>>> Task 142
const helloPromise = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("Hello, World!");
    }, 2000);
  });
  
  helloPromise.then((message) => console.log(message));
  // After 2 seconds, "Hello, World!" will be logged to the console.

//===========>>>>>> Task 143
const conditionalPromise = new Promise<string>((resolve, reject) => {
    const success = Math.random() > 0.5; 
    if (success) {
      resolve("Success!");
    } else {
      reject(new Error("Failure"));
    }
  });
  
  conditionalPromise
    .then((result) => console.log(result)) 
    .catch((error) => console.log(error.message)); 

//===============>>>>>>> Task 144
// Example using Promise.all to wait for multiple promises to resolve
const promise1 = Promise.resolve(5);
const promise2 = 70;
const promise3 = new Promise<string>((resolve) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values); // Outputs: [5, 70, "foo"]
});