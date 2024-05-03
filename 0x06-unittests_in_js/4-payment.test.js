const sendPaymentRequestToApi = require("./3-payment");
const sinon = require("sinon")
const Utils = require("./utils")
const expect = require("chai").expect;

describe('sendPaymentRequestToApi', function() {
  it('spy on calculate num', function(){
    const stub = sinon.stub(Utils, "calculateNumber")
    stub.returns(10)
    sendPaymentRequestToApi(100, 20)
    expect(stub.calledOnce).to.be.true;
  });
});