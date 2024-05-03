const assert = require('assert');
const request = require('request')

describe('Endpoints', function(){
    it('test status code', function(done){
        request('http://localhost:7865', function (error, response, body) {
            assert.equal(response.statusCode, 200)
            done()
        });
    })

    it('test body', function(done){
        request('http://localhost:7865', function (error, response, body) {
            assert.equal(body, 'Welcome to the payment system')
            done()
        });
    })

})