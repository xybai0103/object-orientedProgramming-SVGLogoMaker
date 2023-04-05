class Shape {
    constructor(children = [], shapeColor) {
      this.children = children;
      this.shapeColor = shapeColor;
    }
    
    render(){
      throw new Error('Child class must implement a render() method.');
    }
    renderInnerSvg(){
      return this.children
        // each child shape class should has a render() method that returns
        // a string for the corresponding SVG file with the given shape color
        .map((child) => {
          return child.render();
        })
    }
}

module.exports = Shape;