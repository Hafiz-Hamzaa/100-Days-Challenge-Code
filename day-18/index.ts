
///////------------ Day 18 Coding Challenge------------///////////
//=================>>>>>>>> Task 52
let smartPhones = {
    make : "Redmi",
    model : "10C",
    specs: {
        storage : "!28Gb",
        screensize : "6.3 inches",
        batterylife : "16 hours"
    }
}
console.log(smartPhones);

//============>>>>>>>> Task 53
let devleoperSkills = {
    languages : ["CSS","Java Script","Python"],
    tools : ["Git","Webpack","Docker"],
    frameWork : ["BootStrap","React","Next.js"]
}

//=========>>>>> Getting a specfic skills for developer
let {languages,tools,frameWork} = devleoperSkills

//==========>>>>>> Select each category for the developer
console.log(`Language : ${languages[1]} FrameWork : ${frameWork[2]} Tool : ${tools[0]}`);

//===========>>>>>> Task 54
function createObjectwithDynamickey(key : string , value : string) : string {
    let dynamicObject : any = {}
    dynamicObject[key] = value
    return dynamicObject
}
let preference = createObjectwithDynamickey("color","blue")
console.log(preference);