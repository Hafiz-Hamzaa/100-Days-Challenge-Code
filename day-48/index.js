////------------ Day 48 Coding Challenge-----------////
//=============>>>>>> Task 142
var helloPromise = new Promise(function (resolve) {
    setTimeout(function () {
        resolve("Hello, World!");
    }, 2000);
});
helloPromise.then(function (message) { return console.log(message); });
// After 2 seconds, "Hello, World!" will be logged to the console.
//===========>>>>>> Task 143
var conditionalPromise = new Promise(function (resolve, reject) {
    var success = Math.random() > 0.5;
    if (success) {
        resolve("Success!");
    }
    else {
        reject(new Error("Failure"));
    }
});
conditionalPromise
    .then(function (result) { return console.log(result); })
    .catch(function (error) { return console.log(error.message); });
//===============>>>>>>> Task 144
// Example using Promise.all to wait for multiple promises to resolve
var promise1 = Promise.resolve(5);
var promise2 = 70;
var promise3 = new Promise(function (resolve) {
    setTimeout(resolve, 100, "foo");
});
Promise.all([promise1, promise2, promise3]).then(function (values) {
    console.log(values); // Outputs: [5, 70, "foo"]
});
