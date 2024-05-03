const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('first', function(){
    assert.equal(calculateNumber(1, 3), 4);
  });
  it('sec', function(){
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it('third', function(){
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
  it('fourth', function(){
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
  it('fourth', function(){
    assert.equal(calculateNumber(1, 3.4), 4);
  });
});
