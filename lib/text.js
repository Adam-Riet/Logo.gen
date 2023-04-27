class Text {
    constructor(text, color, shape) {
      this.text = text;
      this.color = color;
      this.shape = shape;
    }
  
    render(shape) {
      let x;
      let y;
//Switch statement to alter x, y axis of text depening on shape
//Ensure text is in middle of shape     
      switch (shape) {
        case 'Square':
          x = 100; 
          y = 115; 
          break;
        case 'Triangle':
          x = 150; 
          y = 130; 
          break;
        case 'Circle':
          x = 150; 
          y = 100;
          break;
        default:
          throw new Error('Invalid shape selected');
      }
    
      return `<text x="${x}" y="${y}" font-size="85" font-family="Arial" fill="${this.color}">${this.text}</text>`;
    }
}

  module.exports = Text ;
  