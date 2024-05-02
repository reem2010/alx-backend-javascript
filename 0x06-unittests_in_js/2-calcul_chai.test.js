const chai = require("chai");
const expect = chai.expect;
const assert = require('assert');
const calculateNumber = require('./2-calcul');

describe('rounded sum test', function() {
  it('first', function(){
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });
  it('sec', function(){
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });
  it('third', function(){
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });
  it('fourth', function(){
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });
});
