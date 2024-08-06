
///////------------ Day 42 Coding Challenge------------///////////
//=================>>>>>>>> Task 124
const Information = {
    name : "Ali",
    getName : function() {
      return this.name
    }
  }
  console.log(Information.getName()); //======>>>> Ali
  
  //============>>>>>>>> Task 125
  const anotherProperty = {
    length : 5,
    width : 6,
    calaculateArea : function() {
      return this.length * this.width
    }
  }
  console.log(anotherProperty.calaculateArea());
  
  //============>>>>> Task 126
  const objects = {
    property : "value",
    outerMehtod : function () {
      console.log(this.property)
  
      let innerMethod = () => {
        console.log(this.property);
        
      }
      innerMethod()
    }
  }
  objects.outerMehtod()