const { Square, Triangle, Circle } = require('./shapes');
const questions = require('./questions');
const inquirer = require('inquirer');
const fs = require('fs');
const Text = require('./text');

function createShape(shape, color) {
    switch (shape) {
      case 'Square':
        return new Square(color);
      case 'Triangle':
        return new Triangle(color);
      case 'Circle':
        return new Circle(color);
      default:
        throw new Error('Invalid shape selected');
    }
  }

  inquirer.prompt(questions).then((answers) => {
    const { shapes, shapesColor, text, textColor } = answers;
    const shape = createShape(shapes, shapesColor);
    const textEl = new Text(text, textColor);
  
    // Render the SVG elements
    const finalShape = shape.render();
    const finalText = textEl.render();
  
    // Combine the shape and text SVG elements to create the final SVG
    const newLogo = `<svg xmlns="http://www.w3.org/2000/svg">${finalShape}${finalText}</svg>`;

    fs.writeFile('logo.svg', newLogo, (err) => { 
        if (err) {
            console.error('Error writing file:', err);
          } else {
            console.log('Generated logo.svg');
          }

        });
  
});

