// ////////---------------- Day 15 Coding Challenge---------------////////////
// //======================>>>>>> Task 43
// let magicians: string[] = ["Alice", "David", "Chris"];
// function make_great(magicians: string[]): string[] {
//   let greatMagicians : any = [];
//   magicians.forEach((magician) => {
//     greatMagicians.push(`${magician} the Great`);
// });
// return greatMagicians;
// }
// function show_magicians(magicians: string[]) {
//   magicians.forEach((magician) => {
//     console.log(magician);
//   });
// }
// let greatMagicians = make_great(magicians.slice()); // Creates a new modified array
// console.log("Original magicians:");
// show_magicians(magicians); // Shows original names
// console.log("Great magicians:");
// show_magicians(greatMagicians); // Shows modified names
//==================>>>>>>>>> Task 44
function making_sandwich() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    console.log("Making a sandwih with : ".concat(item.join(",")));
}
making_sandwich("capsicum", "vegetable", "chicken");
making_sandwich("beef", "cheese");
making_sandwich("galic chicken", "mayo sauce");
//===================>>>>> Task 45
function make_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return (car[key] = value);
    });
    return car;
}
var desired_output = (make_car("Toyota", "Carolla", ["color", "black"], ["year", 2020]));
var desiredOutput = (make_car("Ford", "Fiesta", ["color", "whijte"], ["year", 2018]));
console.log(desired_output);
console.log(desiredOutput);
