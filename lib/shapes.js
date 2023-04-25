class Shape {
    constructor(color) {
      this.color = color;
      }
  }

class Square extends Shape {
    constructor(color) {
      super(color);
      }
      render() {
        return `<polygon points="0,0 100,0 100,100 0,100" fill="${this.color}" />`;
      }
  }

class Triangle extends Shape {
    constructor(color) {
      super(color);
      }
      render() {
        return `<polygon points="50,0 100,86.6 0,86.6" fill="${this.color}" />`;
      }
  }

class Circle extends Shape {
    constructor(color) {
      super(color);
      }
      render() {
        return `<circle cx="50" cy="50" r="50" fill="${this.color}" />`;
      }
  }

  module.exports = {Square, Triangle, Circle};