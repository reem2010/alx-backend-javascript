const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('rounded sum test', () => {
  it('first', () => {
    assert.equal(calculateNumber(1, 3), 4);
  });
  it('sec', () => {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it('third', () => {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
  it('fourth', () => {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
});
