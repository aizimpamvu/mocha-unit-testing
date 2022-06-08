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

    testPromise(){
      return new Promise(function(resolve,reject){
        setTimeout(()=>resolve(3), 6000);
      }).then(function(result){
        return result *2;
      })
    }
}

module.exports = MyClass