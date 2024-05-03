const assert = require('assert');
const request = require('request')

describe('Endpoint /', function(){
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

describe('Endpoint /carts', function(){
    it('test status code', function(done){
        request('http://localhost:7865/cart/3', function (error, response, body) {
            assert.equal(response.statusCode, 200)
            done()
        });
    })

    it('test body', function(done){
        request('http://localhost:7865/cart/3', function (error, response, body) {
            assert.equal(body, 'payment methods for cart 3')
            done()
        });
    })

    it('test status code', function(done){
        request('http://localhost:7865/cart/rr', function (error, response, body) {
            assert.equal(response.statusCode, 404)
            done()
        });
    })

})

describe('Endpoint /available_payments', function(){
    it('test status code', function(done){
        request('http://localhost:7865/available_payments', function (error, response, body) {
            assert.equal(response.statusCode, 200)
            done()
        });
    })

    it('test body', function(done){
        request('http://localhost:7865/available_payments', function (error, response, body) {
            assert.deepEqual(body, '{"payment_methods":{"credit_cards":true,"paypal":false}}')
            done()
        });
    })

})
describe('Endpoint /', function(){
    it('test status code', function(done){
        request.post({
            url: 'http://localhost:7865/login',
            method: 'POST',
            json: {
                userName: 'reem'
            }
        }, (error, response, body) => {
            assert.equal(body, 'Welcome reem')
            done()
        });
    })

    it('test status code', function(done){
        request.post({
            url: 'http://localhost:7865/login',
            method: 'POST',
            json: {
                userName: 'reem'
            }
        }, (error, response, body) => {
            assert.equal(response.statusCode, 200)
            done()
        });
    })

})