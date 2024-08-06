////------------ Day 45 Coding Challenge-----------////
//=============>>>>>> Task 133
//=========>>>> JavaScript Object
var javascriptObject = {
    name: "Amna",
    age: 23,
    rollNo: 3456
};
//==========>>> JSON Object
var jsonObject = JSON.stringify(javascriptObject);
console.log(jsonObject);
//===============>>>>> Task 134
//========>>>> JSON String
var jsonString = '{"name":"Afsha","age":23,"id":"25"}';
//=========>>> Conver into original Object
var originalJavascriptObject = JSON.parse(jsonString);
console.log(originalJavascriptObject);
//===========>>>>> Task 135
var person = {
    name: "Ali",
    age: 56,
    country: "US",
};
// Converts the object into a JSON string with indentation
var JsonString = JSON.stringify(person, null, 2); // The '2' specifies the number of spaces to use as white space
console.log(JsonString); // Output : {
//     "name": "Ali",
//     "age": 56,
//     "country": "US"
//   }
