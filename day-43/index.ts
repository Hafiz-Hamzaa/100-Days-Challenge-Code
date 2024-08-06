///////------------ Day 43 Coding Challenge------------///////////
//=================>>>>>>>> Task 127
const traditionalFunction : any = function(a : any, b : any) {
    return a * b
  }
   const arrowFunction  = (a : any , b : any) =>
    a * b
   console.log(traditionalFunction(5 , 6));
   console.log(arrowFunction(5 , 6));
   
  //================>>>>>> Task 128
  let ArrowFunction = (num1 : number , num2 : number , num3 : number) : number => {
    let product : number = num1 * num2 * num3
    return product
  }
  console.log(ArrowFunction(7,7,6));
  
  //=====================>>>>>>> Task 129
  const traditionalVsArrow = {
    value: "traditionalVsArrow value",
    traditionalFunction: function () {
      console.log("Traditional function:", this.value); 
    },
    arrowFunction : () => {
      // console.log("Arrow function:", this.value); 
    },
  };
  traditionalVsArrow.traditionalFunction(); 
  traditionalVsArrow.arrowFunction(); //=========>>> Likely undefined