//////////////------------------- Day 6 Coding Challenge----------------///////////////////////
//==================>>>> Task 16
let moreGuest: string[] = ["Asma","Abeeha","Laiba"]
console.log('Great News! I just a found a bigger table');

//=======> Beginning of an array
moreGuest.unshift("Areeba")

//=========> Middle of an array
moreGuest.splice(moreGuest.length / 2,0, "Hina")

//===========>>> Ending of an array
moreGuest.push("Afsha")

//================>>>>> Print each guest 
moreGuest.forEach(moreGuest => {
    console.log(`Dear ${moreGuest} you all are join to me for my dinner party`);
})

//================>>>>>> Task 17
//=====>>. same task no 16 .=======>>//
let moreGuests:string[]= ["Asma","Abeeha","Laiba","Amna"]
console.log('Great News! I just a found a bigger table');

//=======> Beginning of an array
moreGuests.unshift("Areeba")

//=========> Middle of an array
moreGuests.splice(moreGuests.length / 2,0, "Hina")

//===========>>> Ending of an array
moreGuest.push("Afsha")

//================>>>>> Print each guest 
moreGuests.forEach(moreGuests => {
    console.log(`Dear ${moreGuests} you all are join to me for my dinner party`);
})
//===========>> Task 17
console.log("Sorry!! for the limited seats only two people invited for dinner party");
while (moreGuests.length > 2) {
    const removedGuest = moreGuests.pop()
    console.log(`Sorry!! you both ${removedGuest} are no longer for dinner party `);
    
}
moreGuests.pop()
moreGuests.pop()

//=====>> Print two people who are invited
moreGuests.forEach(moreGuests => {
    console.log(`Dear ${moreGuests} you are still for invited for dinner party.`);
    
})

//=====>> Final Guest List
console.log("Final Guest List :", moreGuests);

//=================>>>>> Task 18
let places : string[] = ["Saudia","Lahore","Dubai","Iran","Autralia"]
console.log("Original Order :", places); //....... Original Order.......//
console.log("Alphabetical Order :", [...places].sort()); //....... Alphabetical Order.......//
console.log("Original Order :", places); //....... Original Order.......//
console.log("Reverse Order :", [...places].reverse()); //....... Reverse Order.......//
console.log("Original Order :", places); //....... Original Order.......//
places.reverse()
console.log("Reverse Order :", places)
places.reverse()
console.log("Reverse Order :", places)
places.sort()
console.log("Alphabetical Order :", places)
places.reverse()
console.log("Reverse Alphabetical Order :", places)