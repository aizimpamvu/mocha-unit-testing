var MyClass = require("../src/myClass");
var sinon = require("sinon");
var chai = require("chai");
var expect= chai.expect;

var myObj = new MyClass();

describe.skip ("Test suit", function(){
   it("Test the add method", function(){
       expect(myObj.add(1,2)).to.be.equal(3);
   });
   it("Spy the add method", function(){
    var spy = sinon.spy(myObj, "add");
    var arg1 = 10;
    var  arg2 = 20;

    myObj.callAnotherFn(arg1, arg2);
    // sinon.assert.calledOnce(spy);
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith(arg1, arg2)).to.be.true;
});

// Spying the function
it("Spy the callback method", function(){
    var callback = sinon.spy();
    myObj.callTheCallback(callback);
    expect(callback.calledOnce).to.be.true;
});
// Mock the function
it("Mock say hello method", function(){

    var mock= sinon.mock(myObj);
    var expectation = mock.expects("sayHello");
    expectation.exactly(1);
    // expectation.withArgs("hello alleluia");
    myObj.callAnotherFn(10,20);  
    mock.verify();
});

});

// Stub for checking method returns values
describe.skip("Test suit for stub", function(){
    it("Stub add method", function(){
        var stub = sinon.stub(myObj, "add");
        stub
            .withArgs(10, 20)
            .onFirstCall()
            .returns(100)
            .onSecondCall()
            .returns(200);

        expect(myObj.callAnotherFn(10,20)).to.be.equal(100);
        expect(myObj.callAnotherFn(10,20)).to.be.equal(200);
        
    });
});

// Premises testing
describe("Test the presmises", function(){
    it("Premise test case", function(){
      myObj.testPromise().then(function(result){
          this.timeout(0);
          expect(result).to.be.equal(43);
          
      })
        
    });
});