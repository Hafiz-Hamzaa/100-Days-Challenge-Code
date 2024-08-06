///////------------ Day 24 Coding Challenge------------///////////
//=================>>>>>>>> Task 70
function printNumberwithLet() {
    for (var i = 1; i <= 5; i++) {
        console.log(i);
    }
}
printNumberwithLet();
//===============>>>>> Task 71
var colorName = "blue";
colorName = "red";
console.log(colorName); //======>>>> let allow to re-assigning value
var deviceName = "samsung";
// deviceName = "redmi" // it goes an error beacuse const cannot allow to re-asigning value
console.log(deviceName);
//=================>>>>> Task 72
{
    var blockLet = "only usecase inside the block";
    var blockConst = "also only usecase inside the block";
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
