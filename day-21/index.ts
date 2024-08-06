
///////------------ Day 21 Coding Challenge------------///////////
//=================>>>>>>>> Task 61
enum vehicleType {
    car,
    truck,
    motorCycle
}
console.log(vehicleType.truck); //=====>> 1

//=============>>>>> Task 62
interface Student {
    name : string
    age : number
    courses : string[]
}
let student : Student = {
    name : "Akber",
    age  :34,
    courses : ["AI","Web 3","Metaverse"]
}
console.log(student);

//============>>>>> Task 63
type Shape = {
    kind : "Circle" | "Rectangle",
    radius? : number,
    width? : number,
    height? : number
}
//=====>> Describing Circle Types
let circle : Shape = {
    kind : "Circle",
    radius : 5,

}
//=====>>> Desccribing Rectangle types
let rectangle : Shape = {
    kind : "Rectangle",
    width : 7,
    height : 6
}
console.log(circle);
console.log(rectangle);