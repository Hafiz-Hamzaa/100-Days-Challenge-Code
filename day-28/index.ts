///////------------ Day 28 Coding Challenge------------///////////
//=================>>>>>>>> Task 82
function stringLength(text : string) : number {
    return text.length
}
let Textual = stringLength("Artifical")
console.log(Textual);

//============>>>>>> Task 83
function upperLowerCase(text : string) {
    let UpperCase: string = text.toUpperCase()
    let LowerCase: string = text.toLowerCase()
    console.log("Upper Case : ", UpperCase , "Lower Case : ", LowerCase);
}
console.log(upperLowerCase("Coding Journey"));

//==========>>>>>>> Task 84
function replaceJavaScriptWithTypeScript(sentence : string) {
    return sentence.replace(/JavaScript/g, "TypeScript");
  }
  console.log(replaceJavaScriptWithTypeScript("I like JavaScript and JavaScript is easiest!"))