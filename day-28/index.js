///////------------ Day 28 Coding Challenge------------///////////
//=================>>>>>>>> Task 82
function stringLength(text) {
    return text.length;
}
var Textual = stringLength("Artifical");
console.log(Textual);
//============>>>>>> Task 83
function upperLowerCase(text) {
    var UpperCase = text.toUpperCase();
    var LowerCase = text.toLowerCase();
    console.log("Upper Case : ", UpperCase, "Lower Case : ", LowerCase);
}
console.log(upperLowerCase("Coding Journey"));
//==========>>>>>>> Task 84
function replaceJavaScriptWithTypeScript(sentence) {
    return sentence.replace(/JavaScript/g, "TypeScript");
}
console.log(replaceJavaScriptWithTypeScript("I like JavaScript and JavaScript is easiest!"));
