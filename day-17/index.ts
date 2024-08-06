
///////------------ Day 17 Coding Challenge------------///////////
//=================>>>>>>>> Task 49
function log_hobbies(...hobbies : string[]) {
    hobbies.forEach(hobby => {
        console.log(` I enjoy ${hobby}`);
        
    })
}
log_hobbies("coding","study","playing")

//==============>>>>>>>>>> Task 50
let myidealDay : string = `My ideal day hobbies include : 
* Early in the morning and offer namaz-e-efajar.
* Then college study and some hours to write a code on my pc.
* At the end of the day fee some hours spent with my family. `
//=====>>>> Logging all activity to the console
console.log(myidealDay);

//=============>>>>>>> Task 51
//=======>>> Original function
function calculateArea(width : number , height : number) : number {
    return width * height
}
//=======>>>>> Refactor into Arrow function
let calculateareaRectangle = (width : number , height : number) : number =>
    width * height
console.log(calculateareaRectangle(4 ,7)) //====>> logs width and height