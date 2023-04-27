const {Square, Triangle, Circle } = require('./shapes');

//Testing suite to go through each shape class
//and test for color and render method functionality
describe('Shape Classes', () => {
    
  describe('Shape', () => {
    it('Should apply color and render method to shape', () => {
      const square = new Square('#FFA500');
      expect(square.color).toBe('#FFA500');
      expect(square.render()).toBe
      (`<rect x="0" y="0" width="${this.width}" height="${this.height}" fill="${this.color}" />`);
    });
  });
  
  describe('Triangle', () => {
    it('Should apply color and render method to shape', () => {
       const triangle = new Triangle('green');
       expect(triangle.color).toBe('green');
       expect(triangle.render()).toBe
      ('<circle cx="${this.radius}" cy="${this.radius}" r="${this.radius}" fill="${this.color}" />');
    });
  });
  
  describe('Circle', () => {
    it('Should apply color and render method to shape', () => {
      const circle = new Circle('blue');
      expect(circle.color).toBe('blue');
      expect(circle.render()).toBe
      ('<circle cx="${this.radius}" cy="${this.radius}" r="${this.radius}" fill="${this.color}" />');
    });
  });
});