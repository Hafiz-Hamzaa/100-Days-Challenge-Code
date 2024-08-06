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
function making_sandwich(...item:string[]) {
    console.log(`Making a sandwih with : ${item.join(",")}`);
}

making_sandwich("capsicum","vegetable","chicken")
making_sandwich("beef","cheese")
making_sandwich("galic chicken","mayo sauce")

//===================>>>>> Task 45
function make_car(
    manufacturer: string,
    model: string,
    ...options: [string, any][]
  ) {
    let car : any = { manufacturer, model };
    options.forEach(([key, value]) => (car[key] = value));
    return car;
  }
  
  let desired_output = (make_car("Toyota", "Carolla", ["color", "black"], ["year", 2020]));
  let desiredOutput = (make_car("Ford", "Fiesta", ["color", "whijte"], ["year", 2018]));
  console.log(desired_output);
  console.log(desiredOutput);
