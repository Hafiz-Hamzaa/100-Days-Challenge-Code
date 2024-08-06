///////------------ Day 35 Coding Challenge------------///////////
//=================>>>>>>>> Task 103
function booleanValue() : boolean {
    return 3 < 7
}
console.log(booleanValue());

//=============>>>>>> Task 104
function getRandomHexColor(): string {
    const color =
      "#" +
      Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .padStart(6, "0");
    return color;
  }
  
  console.log(getRandomHexColor()); 

//=============>>> Task 105
const diceRoll : number = Math.floor(Math.random() * 5) + 1
console.log(diceRoll);