const Shape = require('./shape.js');

class Square extends Shape {
    constructor(shapeColor) {
        super(shapeColor);
    }
    render(){
        return `<rect x="48" y="10" width="200" height="200" fill="${this.shapeColor}" />`;
    }
}

module.exports = Square;