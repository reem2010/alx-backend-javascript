const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('rounded sum test', () => {
  it('first', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });
  it('sec', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });
  it('third', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });
  it('fourth', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});
