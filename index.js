const { Square, Triangle, Circle } = require('./lib/shapes');

const redSquare = new Square('red');
console.log(redSquare.render());

const greenTriangle = new Triangle('green');
console.log(greenTriangle.render());

const blueCircle = new Circle('blue');
console.log(blueCircle.render());