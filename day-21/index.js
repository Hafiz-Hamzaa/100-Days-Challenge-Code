///////------------ Day 21 Coding Challenge------------///////////
//=================>>>>>>>> Task 61
var vehicleType;
(function (vehicleType) {
    vehicleType[vehicleType["car"] = 0] = "car";
    vehicleType[vehicleType["truck"] = 1] = "truck";
    vehicleType[vehicleType["motorCycle"] = 2] = "motorCycle";
})(vehicleType || (vehicleType = {}));
console.log(vehicleType.truck); //=====>> 1
var student = {
    name: "Akber",
    age: 34,
    courses: ["AI", "Web 3", "Metaverse"]
};
console.log(student);
//=====>> Describing Circle Types
var circle = {
    kind: "Circle",
    radius: 5,
};
//=====>>> Desccribing Rectangle types
var rectangle = {
    kind: "Rectangle",
    width: 7,
    height: 6
};
console.log(circle);
console.log(rectangle);
