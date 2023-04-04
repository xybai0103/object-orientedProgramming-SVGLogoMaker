const Shape = require('./shape.js');

class Square extends Shape {
    constructor(color) {
        super(color);
    }
    render(){
        return `<rect x="48" y="10" width="200" height="200" fill="${this.color}" />`;
    }
}

module.exports = Square;