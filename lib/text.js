// create a Test class for the text shown in the shape of the SVG file
class Text {
    constructor(textInput, textColor) {
      this.textInput = textInput;
      this.textColor = textColor;
    }
    render(){
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textInput}</text>`;
    }
}

module.exports = Text