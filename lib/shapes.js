//Parent class. Only inheritance will be color. 
class Shape {
    constructor(color) {
      this.color = color;
      }
  }

//Child class inheriting color property.
//Creating a render method to return SVG code for a square with the specified color.
class Square extends Shape {
    constructor(color) {
      super(color);
      }
      render() {
        return `<polygon points="0,0 100,0 100,100 0,100" fill="${this.color}" />`;
      }
  }

//Child class inheriting color property.
//Creating a render method to return SVG code for a triangle with the specified color.
class Triangle extends Shape {
    constructor(color) {
      super(color);
      }
      render() {
        return `<polygon points="50,0 100,86.6 0,86.6" fill="${this.color}" />`;
      }
  }

//Child class inheriting color property.
//Creating a render method to return SVG code for a circle with the specified color.
class Circle extends Shape {
    constructor(color) {
      super(color);
      }
      render() {
        return `<circle cx="50" cy="50" r="50" fill="${this.color}" />`;
      }
  }

  module.exports = {Square, Triangle, Circle};