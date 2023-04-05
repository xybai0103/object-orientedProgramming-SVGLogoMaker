const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
//const CreateSvgString = require('./SVGString');
const Circle = require('./circle.js');
const Text = require('./text.js');

function CreateSvgString(){};



class CLI {

  run() {
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'textInput',
          message: 'Please enter up to three characters for your SVG Logo',
        },
        {
          type: 'input',
          name: 'textColor',
          message: 'Please enter a color keyword (OR a hexadecimal number) for the text color',
        },
        {
          type: 'list',
          name: 'shape',
          message: 'Please choose a shape for your SVG Logo',
          choices: ['circle', 'square', 'triangle'],
        },
        {
          type: 'input',
          name: 'shapeColor',
          message: 'Please enter a color keyword (OR a hexadecimal number) for the shape color',
        },
      ])
      
      .then(({textInput, textColor, shape, shapeColor}) => {
        console.log(`${shapeColor}`);
        CreateSvgString.prototype.circle = () => {
          this.circle = new Circle();
          this.circle.shapeColor = `${shapeColor}`;
          this.text = new Text();
          this.text.textInput = `OOP`;
          this.text.textColor = `white`;
      
          return [
              '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">',
              `${this.circle.render()}`,
              `${this.text.render()}`,
              '</svg>',
          ].join('');
      };

        //const responseShapeColor = `${shapeColor}`;
        const newCreateSvgString = new CreateSvgString();
        return writeFile(
          join(__dirname, '../logo.svg'),
          newCreateSvgString[shape]()
        );
      })
      .then(() => console.log('Generated logo.svg'))
      .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
      });
  }
}
module.exports = CLI;
