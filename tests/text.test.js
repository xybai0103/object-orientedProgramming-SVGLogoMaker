// created a testing suite for the Text class to verify that the string 
// for the corresponding SVG file with the given text colors renders correctly.
const Text = require('../lib/text.js');

describe('Text', () => {
  test('should render the string for a SVG file with the text and the given text color', () => {
    const newText = new Text();
    newText.textInput = 'OOP';
    newText.textColor = 'white';
    expect(newText.render()).toEqual('<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">OOP</text>');
  });
});