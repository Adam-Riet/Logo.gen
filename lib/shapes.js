//Parent class. Children will inherent color, width, height 
class Shape {
    constructor(color) {
      this.color = color;
      this.width = 300;
      this.height = 200;
      }
  }

//Child class inheriting color property.
//Creating a render method to return SVG code for a square with the specified color.
class Square extends Shape {
  constructor(color) {
    super(color);
    }

    render() {
    return `<rect x="0" y="0" width="${this.width}" height="${this.height}" fill="${this.color}" />`;
    }
}

//Child class inheriting color property.
//Creating a render method to return SVG code for a triangle with the specified color.
class Triangle extends Shape {
  constructor(color) {
    super(color);
    }

    render() {
    const halfWidth = this.width / 2;
    const points = [
      `${halfWidth},0`,
      `${this.width},${this.height}`,
      `0,${this.height}`,
    ].join(' ');

    return `<polygon points="${points}" fill="${this.color}" />`;
    }
}

//Child class inheriting color property.
//Creating a render method to return SVG code for a circle with the specified color.
class Circle extends Shape {
    constructor(color) {
      super(color);
      this.radius = Math.min(this.width, this.height) / 2;
      }
      render() {
      return `<circle cx="${this.radius}" cy="${this.radius}" r="${this.radius}" fill="${this.color}" />`;
      }
  }

  module.exports = {Square, Triangle, Circle};