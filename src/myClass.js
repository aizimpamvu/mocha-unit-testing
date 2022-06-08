class MyClass{
    constructor(){
        console.log("Initiate")
    }

    sayHello(str){
      console.log(str)
    }
    add(arg1, arg2){
      var result;
      result= arg1+ arg2;
      return result;  
    }
    callAnotherFn(arg1, arg2){
      this.sayHello("hello alleluia");
      var result = this.add(arg1,arg2);
      return result;
    }

    callTheCallback(callback){
      callback();
    }
}

module.exports = MyClass