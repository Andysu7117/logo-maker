const inquirer = require('inquirer');
const join = require('path');
const writeFile = require('fs/promises');
const { generateShape } = require('./shapes');

class CLI {
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
      .then((userInput) => {
        let shape;
        switch (userInput.shape) {
          case 'triangle':
            shape = new Triangle(userInput.shapeColour);
            break;
          case 'circle':
            shape = new Circle(userInput.shapeColour);
            break;
          case 'square':
            shape = new Square(userInput.shapeColour);
          default:
            throw new Error('invalid shape selected.');
        }
      })
      .then((shape) => {});
  }
}
