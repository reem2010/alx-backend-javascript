const sendPaymentRequestToApi = require("./3-payment");
const sinon = require("sinon")
const Utils = require("./utils")

describe('sendPaymentRequestToApi', function() {
    let spy
    beforeEach(() => {
        spy = sinon.spy(console, 'log');
    });
  it('spy on console', function(){
    sendPaymentRequestToApi(100, 20)
    sinon.assert.calledOnce(spy)
    sinon.assert.calledWith(spy, 'The total is: 120');
  });
  it('spy on console', function(){
    sendPaymentRequestToApi(10, 10)
    sinon.assert.calledOnce(spy)
    sinon.assert.calledWith(spy, 'The total is: 20');
  });
  afterEach(() => {
    spy.restore();
});

});