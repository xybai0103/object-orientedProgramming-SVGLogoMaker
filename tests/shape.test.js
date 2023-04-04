//created a testing suite for the Shape class to verify that render() throws an error when called directly.
const Shape = require('../lib/shape.js');

describe('Shape', () => {
  test('should throw error if render() is called', () => {
    const shape = new Shape();
    const err = new Error('Child class must implement a render() method.')
    expect(shape.render).toThrow(err);
  });
});