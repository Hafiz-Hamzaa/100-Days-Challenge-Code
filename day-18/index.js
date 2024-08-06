///////------------ Day 18 Coding Challenge------------///////////
//=================>>>>>>>> Task 52
var smartPhones = {
    make: "Redmi",
    model: "10C",
    specs: {
        storage: "!28Gb",
        screensize: "6.3 inches",
        batterylife: "16 hours"
    }
};
console.log(smartPhones);
//============>>>>>>>> Task 53
var devleoperSkills = {
    languages: ["CSS", "Java Script", "Python"],
    tools: ["Git", "Webpack", "Docker"],
    frameWork: ["BootStrap", "React", "Next.js"]
};
//=========>>>>> Getting a specfic skills for developer
var languages = devleoperSkills.languages, tools = devleoperSkills.tools, frameWork = devleoperSkills.frameWork;
//==========>>>>>> Select each category for the developer
console.log("Language : ".concat(languages[1], " FrameWork : ").concat(frameWork[2], " Tool : ").concat(tools[0]));
//===========>>>>>> Task 54
function createObjectwithDynamickey(key, value) {
    var dynamicObject = {};
    dynamicObject[key] = value;
    return dynamicObject;
}
var preference = createObjectwithDynamickey("color", "blue");
console.log(preference);
