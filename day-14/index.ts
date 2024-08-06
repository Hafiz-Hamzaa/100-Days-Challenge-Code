
///////---------------- Day 14 Coding Challenge-------------------//////////
//==================>>>>>>>>> Task 40
function make_album(artist : string , title : string , tracks? : number) {
    let album : any= {artist , title}
    if (tracks) {
        album ["tracks"] = tracks
    }
    return album;
}
let album = make_album("Aqib","Red wave")
console.log(album);

album = make_album("Aman","Light")
console.log(album);

album = make_album("Affan","Seenbreze",12)
console.log(album);

//===================>>>>>> Task 41
let magicians : string [] = ["John","David","Chris"]
function show_magicians(magicians : string []) {
    magicians.forEach(magician => {
        console.log(magician);
         
   })
}
show_magicians(magicians)

// //=================>>>>>>>>> Task 42
let Magicians : string [] = ["John","David","Chris"]
function showMagicians(Magicians : string []) {
    Magicians.forEach(Magician => {
        console.log(Magicians);
        
    })
}

function make_great(showMagicians : string[]) {
    for (let i = 0 ; i < Magicians.length  ; i++ ) {
        Magicians[i] = Magicians[i] + "the great"
    }
}
make_great(Magicians)
show_magicians(Magicians)