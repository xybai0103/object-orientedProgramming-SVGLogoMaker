// create a Test class for the text shown in the shape of the SVG file
class Text {
    constructor(text, color) {
      this.text = text;
      this.color = color;
    }
    render(){
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>`;
    }
}

module.exports = Text;AbortController