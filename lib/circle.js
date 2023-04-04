const Shape = require('./shape.js');

class Circle extends Shape {
    render(){
        return `<circle cx="150" cy="105" r="80" ${colorLiteral} />`;
    }
}