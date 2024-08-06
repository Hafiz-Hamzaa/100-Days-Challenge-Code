///////------------ Day 42 Coding Challenge------------///////////
//=================>>>>>>>> Task 124
var Information = {
    name: "Ali",
    getName: function () {
        return this.name;
    }
};
console.log(Information.getName()); //======>>>> Ali
//============>>>>>>>> Task 125
var anotherProperty = {
    length: 5,
    width: 6,
    calaculateArea: function () {
        return this.length * this.width;
    }
};
console.log(anotherProperty.calaculateArea());
//============>>>>> Task 126
var objects = {
    property: "value",
    outerMehtod: function () {
        var _this = this;
        console.log(this.property);
        var innerMethod = function () {
            console.log(_this.property);
        };
        innerMethod();
    }
};
objects.outerMehtod();
