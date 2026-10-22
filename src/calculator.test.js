const test = require('node:test');
const assert = require('node:assert/strict');
const { add } = require('./calculator');

test('складывает положительные числа', () => {
  assert.equal(add(2, 3), 5);
});
test('обрабатывает отрицательные числа и ноль', () => {
  assert.equal(add(-4, 4), 0);
  assert.equal(add(0, -2), -2);
});
test('отклоняет строки, NaN и бесконечность', () => {
  for (const value of ['2', NaN, Infinity, undefined, null]) {
    assert.throws(() => add(value, 1), TypeError);
    assert.throws(() => add(1, value), TypeError);
  }
});
