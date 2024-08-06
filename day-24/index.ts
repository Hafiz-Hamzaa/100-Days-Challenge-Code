///////------------ Day 24 Coding Challenge------------///////////
//=================>>>>>>>> Task 70
function printNumberwithLet() {
    for (let i =1 ; i <= 5 ; i++) {
        console.log(i);
        
    }
}
printNumberwithLet()

//===============>>>>> Task 71
let colorName : string = "blue"
colorName = "red"
console.log(colorName); //======>>>> let allow to re-assigning value

const deviceName : string = "samsung"
// deviceName = "redmi" // it goes an error beacuse const cannot allow to re-asigning value
console.log(deviceName);

//=================>>>>> Task 72
{
let blockLet : string = "only usecase inside the block"
const blockConst : string = "also only usecase inside the block"
console.log(blockConst);
console.log(blockLet);
}
// try {
//     console.log(blockLet); //this will fail
// } catch (error) {
//     console.log("Block let not accessible outside the bock");
// }

// try {
//     console.log(blockConst); //this will also fail
// } catch (error) {
//     console.log("Block const not accessible outside the bock");
// }