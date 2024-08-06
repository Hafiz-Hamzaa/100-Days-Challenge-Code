///////------------ Day 37 Coding Challenge------------///////////
//=================>>>>>>>> Task 109
var currentTime = new Date();
if (currentTime.getHours() < 12) {
    console.log("Good Morning");
}
//===============>>>>>> Task 110
function assignGrade(score) {
    if (score >= 90) {
        return "A";
    }
    else if (score >= 80) {
        return "B";
    }
    else if (score >= 70) {
        return "C";
    }
    else if (score >= 60) {
        return "D";
    }
    else {
        return "F";
    }
}
console.log(assignGrade(88)); // Outputs: B
console.log(assignGrade(57)); // Outputs: F
//===============>>>>> Task 111
function categorizeAge(age) {
    if (age < 13) {
        return "child";
    }
    else if (age <= 19) {
        return "teenager";
    }
    else {
        return "adult";
    }
}
console.log(categorizeAge(12)); // Outputs: child
console.log(categorizeAge(18)); // Outputs: teenager
console.log(categorizeAge(25)); // Outputs: adult
