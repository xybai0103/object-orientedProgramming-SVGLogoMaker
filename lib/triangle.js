const Shape = require('./shape.js');

class Triangle extends Shape {
    constructor(shapeColor) {
        super(shapeColor);
    }
    render(){
        return `<polygon points="150, 0 264, 182 36, 182" fill="${this.shapeColor}" />`;
    }
}

module.exports = Triangle;