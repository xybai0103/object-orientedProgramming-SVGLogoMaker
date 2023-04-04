const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createSvgString } = require('./SvgString');

class CLI {

  run() {
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'text',
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
      
      .then(({shape}) => {
        return writeFile(
          join(__dirname, '../logo.svg'),
          createSvgString.${shape}()
        );
      })
      .then(() => console.log('Gnerated logo.svg'))
      .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
      });
  }
}
module.exports = CLI;
