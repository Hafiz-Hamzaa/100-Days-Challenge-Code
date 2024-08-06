///////---------------- Day 14 Coding Challenge-------------------//////////
//==================>>>>>>>>> Task 40
function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks) {
        album["tracks"] = tracks;
    }
    return album;
}
var album = make_album("Aqib", "Red wave");
console.log(album);
album = make_album("Aman", "Light");
console.log(album);
album = make_album("Affan", "Seenbreze", 12);
console.log(album);
//===================>>>>>> Task 41
var magicians = ["John", "David", "Chris"];
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
show_magicians(magicians);
// //=================>>>>>>>>> Task 42
var Magicians = ["John", "David", "Chris"];
function showMagicians(Magicians) {
    Magicians.forEach(function (Magician) {
        console.log(Magicians);
    });
}
function make_great(showMagicians) {
    for (var i = 0; i < Magicians.length; i++) {
        Magicians[i] = Magicians[i] + "the great";
    }
}
make_great(Magicians);
show_magicians(Magicians);
