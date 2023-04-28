const { Square, Triangle, Circle } = require('./shapes');

//Testing suite to go through each shape class
//and test for color and render method functionality
    describe('Shape Classes', () => {
    describe('Square', () => {
    it('Should apply color and render method to shape', () => {
      const square = new Square('#FFA500');
      expect(square.color).toBe('#FFA500');
      expect(square.render()).toBe(`<rect x="0" y="0" width="${square.width}" height="${square.height}" fill="${square.color}" />`);
    });
    });

//Test the triangle class
    describe('Triangle', () => {
    it('Should apply color and render method to shape', () => {
      const triangle = new Triangle('green');
      expect(triangle.color).toBe('green');
      const halfWidth = triangle.width / 2;
      const points = [
        `${halfWidth},0`,
        `${triangle.width},${triangle.height}`,
        `0,${triangle.height}`,
      ].join(' ');
      expect(triangle.render()).toBe(`<polygon points="${points}" fill="${triangle.color}" />`);
    });
    });

//Test the Circle class
    describe('Circle', () => {
    it('Should apply color and render method to shape', () => {
      const circle = new Circle('blue');
      expect(circle.color).toBe('blue');
      expect(circle.render()).toBe(`<circle cx="${circle.radius}" cy="${circle.radius}" r="${circle.radius}" fill="${circle.color}" />`);
    });
    });
    });
