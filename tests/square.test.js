// created a testing suite for the Square class to verify that the string 
// for the corresponding SVG file with the given shape colors renders correctly.
const Square = require('../lib/square.js');

describe('Square', () => {
  test('should render the string for a SVG file with a square and the given shape color', () => {
    const shape = new Square();
    shape.shapeColor = 'blue';
    expect(shape.render()).toEqual('<rect x="48" y="10" width="200" height="200" fill="blue" />');
  });
});