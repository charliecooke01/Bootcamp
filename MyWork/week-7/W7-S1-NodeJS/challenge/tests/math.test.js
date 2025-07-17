// math.test.js
const { add, subtract, multiply, divide } = require('../math');

describe('math.js – calculator functions', () => {
  // “table‑driven” tests: input → expected
  const cases = [
    { a:  1, b:  2, add:  3, sub: -1, mul: 2,  div:  0.5 },
    { a: -4, b: -6, add: -10, sub: 2, mul: 24, div:  0.6666666667 },
    { a:  0, b:  5, add:  5, sub: -5, mul: 0, div:  0 },
  ];

  test.each(cases)('works for $a and $b', ({ a, b, add: addR, sub, mul, div }) => {
    expect(add(a, b)).toBe(addR);
    expect(subtract(a, b)).toBe(sub);
    expect(multiply(a, b)).toBe(mul);
    expect(divide(a, b)).toBeCloseTo(div);
  });

  test('divide throws on division by zero', () => {
    expect(() => divide(1, 0)).toThrow(/zero/i);
  });
});