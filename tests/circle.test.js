// created a testing suite for the Circle class to verify that the string 
// for the corresponding SVG file with the given shape colors renders correctly.
const Circle = require('../lib/circle.js');

describe('Circle', () => {
  test('should render the string for a SVG file with a circle and the given shape color', () => {
    const shape = new Circle();
    shape.shapeColor = 'green';
    expect(shape.render()).toEqual('<circle cx="150" cy="105" r="80" fill="green" />');
  });
});