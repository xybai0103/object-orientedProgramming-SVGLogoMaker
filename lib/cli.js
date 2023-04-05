const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
// Import child shape classes and text class
const Circle = require('./circle.js');
const Square = require('./square.js');
const Triangle = require('./triangle.js');
const Text = require('./text.js');


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
        // define CreateSvgString class, set properties with users' inputs
        class CreateSvgString {
          circle(){
              this.circle = new Circle();
              this.text = new Text();
              this.circle.shapeColor = `${shapeColor}`;
              this.text.textInput = `${textInput}`;
              this.text.textColor = `${textColor}`;
              return [
                  '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">',
                  `${this.circle.render()}`,
                  `${this.text.render()}`,
                  '</svg>',
              ].join('');
          };
          
          square(){
              this.square = new Square();
              this.text = new Text();
              this.square.shapeColor = `${shapeColor}`;
              this.text.textInput = `${textInput}`;
              this.text.textColor = `${textColor}`;
              return [
                  '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">',
                  `${this.square.render()}`,
                  `${this.text.render()}`,
                  '</svg>',
              ].join('');
          };
          
          triangle(){
              this.triangle = new Triangle();
              this.text = new Text();
              this.triangle.shapeColor = `${shapeColor}`;
              this.text.textInput = `${textInput}`;
              this.text.textColor = `${textColor}`;
              return [
                  '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">',
                  `${this.triangle.render()}`,
                  `${this.text.render()}`,
                  '</svg>',
              ].join('');
          };
        };

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
