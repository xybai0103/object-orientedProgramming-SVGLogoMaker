// a constructor createSvgString is created that returns a string for the 
// corresponding SVG file with the given shape, shape color, text, and text color

// Import child shape classes and text class
const Circle = require('./circle.js');
const Square = require('./square.js');
const Triangle = require('./triangle.js');
const Text = require('./text.js');

class CreateSvgString {
    circle(){
        this.circle = new Circle();
        this.text = new Text();
        return [
            '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">',
            `${this.circle.render()}`,
            `${this.text.render()}`,
            '</svg>',
        ].join('');
    };
    
    square(){
        this.square = new Square();
        this.text = new Text();
        return [
            '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">',
            `${this.square.render()}`,
            `${this.text.render()}`,
            '</svg>',
        ].join('');
    };
    
    triangle(){
        this.triangle = new Triangle();
        this.text = new Text();
        return [
            '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">',
            `${this.triangle.render()}`,
            `${this.text.render()}`,
            '</svg>',
        ].join('');
    };
};

// export the constructor createSvgString
module.exports = CreateSvgString;