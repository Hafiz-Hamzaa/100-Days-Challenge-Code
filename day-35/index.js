///////------------ Day 35 Coding Challenge------------///////////
//=================>>>>>>>> Task 103
function booleanValue() {
    return 3 < 7;
}
console.log(booleanValue());
//=============>>>>>> Task 104
function getRandomHexColor() {
    var color = "#" +
        Math.floor(Math.random() * 0xffffff)
            .toString(16)
            .padStart(6, "0");
    return color;
}
console.log(getRandomHexColor());
//=============>>> Task 105
var diceRoll = Math.floor(Math.random() * 5) + 1;
console.log(diceRoll);
