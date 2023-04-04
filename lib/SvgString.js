// a constructor createSvgString is created that returns a string for the 
// corresponding SVG file with the given shape, shape color, text, and text color

// Import child shape classes and text class
const Circle = require('../lib/circle.js');
const Square = require('../lib/square.js');
const Triangle = require('../lib/triangle.js');
const Text = require('../lib/text.js');

function createSvgString(){};

createSvgString.prototype.circle = () => {
    const circle = new Circle().render();
    const text = new Text().render();
    return [
        '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">',
        `${circle}`,
        `${text}`,
        '</svg>',
    ].join('');
};

createSvgString.prototype.square = () => {
    const square = new Square().render();
    const text = new Text().render();
    return [
        '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">',
        `${square}`,
        `${text}`,
        '</svg>',
    ].join('');
};

createSvgString.prototype.triangle = () => {
    const triangle = new Triangle().render();
    const text = new Text().render();
    return [
        '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">',
        `${triangle}`,
        `${text}`,
        '</svg>',
    ].join('');
};

// export the constructor createSvgString
module.exports = { createSvgString };