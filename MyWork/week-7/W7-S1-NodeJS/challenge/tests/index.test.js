// index.test.js
// Mock the entire math module BEFORE requiring index.js
jest.mock('../math', () => ({
  add:      jest.fn(() => 42),
  subtract: jest.fn(() => -42),
  multiply: jest.fn(() => 84),
  divide:   jest.fn(() => 0.42),
}));

const mockedMath = require('../math');
const fs   = require('fs');   // if you later use fs, you can mock it too
const path = require('path'); // idem

describe('index.js – wiring & console output', () => {
  // Capture console.log
  let spy;
  beforeEach(() => {
    spy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });
  afterEach(() => {
    spy.mockRestore();
    jest.clearAllMocks();
    jest.resetModules();      // clean require cache for fresh re‑runs
  });

  test('prints the results returned by mocked math functions', () => {
    require('../index');      // run the script

    expect(mockedMath.add).toHaveBeenCalledWith(1, 2);
    expect(mockedMath.subtract).toHaveBeenCalledWith(1, 2);
    expect(mockedMath.multiply).toHaveBeenCalledWith(1, 2);
    expect(mockedMath.divide).toHaveBeenCalledWith(1, 2);

    expect(spy).toHaveBeenNthCalledWith(1, 42);
    expect(spy).toHaveBeenNthCalledWith(2, -42);
    expect(spy).toHaveBeenNthCalledWith(3, 84);
    expect(spy).toHaveBeenNthCalledWith(4, 0.42);
  });
});