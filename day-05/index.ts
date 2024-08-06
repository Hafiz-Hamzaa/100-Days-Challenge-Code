//////////////-------------- Day 5 Coding Challenge---------------///////////////
//================>>> Task 13
let transports: string[] = ["honda","bike","civic","suzukl"]
transports.forEach(transport => {
    console.log(`I would like to own a ${transport}`);
})

//===============>>> Task 14
let guestDinner :string[] = ["Umer","Zaid","Hassan"]
guestDinner.forEach(guestDinner => {
    console.log(`Dear ${guestDinner} you are invited to my dinner party`);
})

//==================>>>> Task 15
let changingGuestList: string[] = ["Ali","Zaid","Hassan"]
changingGuestList.forEach(changingGuestList => {
    console.log(`Dear ${changingGuestList} you are invited to my dinner party`);
})

//=====>> Unable to attend the dinner
let cannotAttend : string = "Ali"
console.log(`Sorry ${cannotAttend} you are not invited for my dinner party`);

//==========> Replace the new guest
let newGuest : string = "Sufiyan"
changingGuestList[changingGuestList.indexOf(cannotAttend)] = newGuest

//=============>>>> Print those person who are still invited for dinner 
changingGuestList.forEach(changingGuestList => {
    console.log(`Dear ${changingGuestList} you are still invited for my dinner party`);
})
