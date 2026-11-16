const assert = require('node:assert');
const { applyDiscount } = require('./math');

assert.strictEqual(
  applyDiscount(100, 20),
  80,
  '20% off 100 should be 80'
);

console.log('all tests passed');
