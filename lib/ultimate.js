//Import required modules, shape classes, and questions for the inquirer prompt
const { Square, Triangle, Circle } = require('./shapes');
const questions = require('./questions');
const inquirer = require('inquirer');
const fs = require('fs');
const Text = require('./text');



class NewLogo {
  constructor() {}
//Switch case function to create new shape/color based on user selection.
    createShape(shape, color) {
    switch (shape) {
      case 'Square':
        return new Square(color);
      case 'Triangle':
        return new Triangle(color);
      case 'Circle':
        return new Circle(color);
      default:
        throw new Error('Invalid shape selected');
    }}
  


//Async function to run the inquirer prompt and create the new logo.
//Inquirer prompt to ask user questions about shape, color, and text.
  async run() { 
    const answers = await inquirer.prompt(questions);
    const { shapes, shapesColor, text, textColor } = answers;
    const shape = this.createShape(shapes, shapesColor);
    const textEl = new Text(text, textColor, shapes);
  
//Render the shape and text SVG elements.
    const finalShape = shape.render();
    const finalText = textEl.render();
  
//Combine the shape and text SVG elements to create the final SVG logo
//Importing google font Roboto style. Internet connection required. 
    const newLogo = `
    <svg xmlns="http://www.w3.org/2000/svg">
    <style>
    @import url("https://fonts.googleapis.com/css?family=Bruno+Ace&amp;display=swap");
    </style>
    ${finalShape}${finalText}
    </svg>`;

//Write the new logo to a file called logo.svg.
    fs.writeFile('logo.svg', newLogo, (err) => { 
        if (err) {
            console.error('Error writing file:', err);
          } else {
            console.log('Generated logo.svg');
          }

        });
  
};
}

module.exports = NewLogo ;