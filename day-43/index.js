///////------------ Day 43 Coding Challenge------------///////////
//=================>>>>>>>> Task 127
var traditionalFunction = function (a, b) {
    return a * b;
};
var arrowFunction = function (a, b) {
    return a * b;
};
console.log(traditionalFunction(5, 6));
console.log(arrowFunction(5, 6));
//================>>>>>> Task 128
var ArrowFunction = function (num1, num2, num3) {
    var product = num1 * num2 * num3;
    return product;
};
console.log(ArrowFunction(7, 7, 6));
//=====================>>>>>>> Task 129
var traditionalVsArrow = {
    value: "traditionalVsArrow value",
    traditionalFunction: function () {
        console.log("Traditional function:", this.value);
    },
    arrowFunction: function () {
        // console.log("Arrow function:", this.value); 
    },
};
traditionalVsArrow.traditionalFunction();
traditionalVsArrow.arrowFunction(); //=========>>> Likely undefined
