const Shape = require('./shape.js');

class square extends Shape {
    render(){
        return `<rect x="48" y="10" width="200" height="200" ${colorLiteral} />`;
    }
}