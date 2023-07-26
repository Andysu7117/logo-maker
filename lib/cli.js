const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const Shape = require('./shapes');

class CLI {
  constructor() {
    this.text = '';
    this.textColour = '';
    this.shape = '';
    this.shapeColour = '';
  }
  async run() {
    await inquirer
      .prompt([
        {
          type: 'input',
          name: 'text',
          message: 'Enter text for your logo (Up to 3 characters)',
          validate: (input) => input.length <= 3,
        },
        {
          type: 'input',
          name: 'textColour',
          message: 'Enter text color keyword or hexadecimal number:',
        },
        {
          type: 'list',
          name: 'shape',
          message: 'Choose a shape:',
          choices: ['circle', 'triangle', 'square'],
        },
        {
          type: 'input',
          name: 'shapeColour',
          message: 'Enter shape color keyword or hexadecimal number:',
        },
      ])
      .then(({ text, textColour, shape, shapeColour }) => {
        this.text = text;
        this.textColour = textColour;
        this.shape = shape;
        this.shapeColour = shapeColour;
      })
      .then(() => {
        let logo;
        switch (this.shape) {
          case 'triangle':
            logo = new Shape.Triangle(
              this.shapeColour,
              this.text,
              this.textColour
            );
            break;
          case 'circle':
            logo = new Shape.Circle(
              this.shapeColour,
              this.text,
              this.textColour
            );
            break;
          case 'square':
            logo = new Shape.Square(
              this.shapeColour,
              this.text,
              this.textColour
            );
          default:
            throw new Error('invalid shape selected.');
        }

        const svgContent = logo.render();
        return writeFile(
          join(__dirname, '..', 'examples', `${this.text}.svg`),
          svgContent
        );
      })
      .then(() => console.log('Logo Created'))
      .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
      });
  }
}

module.exports = CLI;
