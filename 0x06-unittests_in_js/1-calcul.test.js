const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  it('first', function(){
    assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
  });
  it('sec', function(){
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
  it('third', function(){
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });
  it('fourth', function(){
    assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});
