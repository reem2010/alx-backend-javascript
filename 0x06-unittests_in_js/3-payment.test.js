const sendPaymentRequestToApi = require("./3-payment");
const sinon = require("sinon")
const Utils = require("./utils")

describe('sendPaymentRequestToApi', function() {
  it('spy on calculate num', function(){
    const spy = sinon.spy(Utils, "calculateNumber")
    sendPaymentRequestToApi(100, 20)
    sinon.assert.calledOnce(spy)
  });
});