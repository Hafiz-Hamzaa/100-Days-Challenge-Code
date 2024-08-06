///////---------------- Day 13 Coding Challenge-------------------//////////
//==================>>>>>>>>> Task 37
function make_shirt(size:string = "large", message:string = "coding is life") {
    console.log(`This is the ${size} shirt and ${message} printed on it`);
}
make_shirt() //======>>> Deafult large message
make_shirt("medium","coding is just about logic building") //=======>>>> Deafult medium message

//===============>>>>>> Task 38
function describeCity(city : string , country : string = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
describeCity("Karachi")
describeCity("Sawat")
describeCity("Tokyo","Japan")

//==================>>>>> Task 39
function city_country(city : string , country : string) {
    return `${city} ${country}`
}
let response = city_country("Karachi","Pkaistan")
let result = city_country("Tokyo","Japan")
let output = city_country("Paris","France")
console.log(response);
console.log(result);
console.log(output);