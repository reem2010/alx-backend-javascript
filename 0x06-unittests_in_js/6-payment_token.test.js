const getPaymentTokenFromAPI = require("./6-payment_token")
const assert = require('assert');

describe('getPaymentTokenFromAPI', function(){
    it('test async', async function(){
        payment = await getPaymentTokenFromAPI(true)
        assert.deepStrictEqual(payment, {data: 'Successful response from the API' })
    })

})