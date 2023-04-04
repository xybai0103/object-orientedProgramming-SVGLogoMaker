const Shape = require('./shape.js');

class Triangle extends Shape {
    constructor(color) {
        super(color);
    }
    render(){
        return `<polygon points="150, 0 264, 182 36, 182" fill="${this.color}" />`;
    }
}

module.exports = Triangle;