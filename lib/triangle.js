const Shape = require('./shape.js');

class Triangle extends Shape {
    render(){
        return `<polygon points="150, 0 264, 182 36, 182" ${colorLiteral} />`;
    }
}

module.exports = Triangle;