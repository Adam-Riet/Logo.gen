const {Square, Triangle, Circle } = require('./shapes');

//Testing suite to go through each shape class
//and test for color and render method functionality
describe('Shape Classes', () => {
    
  describe('Shape', () => {
    it('Should apply color and render method to shape', () => {
      const square = new Square('#FFA500');
      expect(square.color).toBe('#FFA500');
      expect(square.render()).toBe
      ('<polygon points="0,0 100,0 100,100 0,100" fill="#FFA500" />');
    });
  });
  
  describe('Triangle', () => {
    it('Should apply color and render method to shape', () => {
       const triangle = new Triangle('green');
       expect(triangle.color).toBe('green');
       expect(triangle.render()).toBe
      ('<polygon points="50,0 100,86.6 0,86.6" fill="green" />');
    });
  });
  
  describe('Circle', () => {
    it('Should apply color and render method to shape', () => {
      const circle = new Circle('blue');
      expect(circle.color).toBe('blue');
      expect(circle.render()).toBe
      ('<circle cx="50" cy="50" r="50" fill="blue" />');
    });
  });
});