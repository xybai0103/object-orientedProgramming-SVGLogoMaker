// created a testing suite for the Triangle class to verify that the string 
// for the corresponding SVG file with the given shape colors renders correctly.
const Triangle = require('../lib/triangle.js');

describe('Triangle', () => {
  test('should render the string for a SVG file with a triangle and the given shape color', () => {
    const shape = new Triangle();
    shape.shapeColor = 'red';
    expect(shape.render()).toEqual('<polygon points="150, 0 264, 182 36, 182" fill="red" />');
  });
});