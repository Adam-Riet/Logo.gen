class Text {
    constructor(text, color, shape) {
      this.text = text;
      this.color = color;
      this.shape = shape;
    }
  
    render() {
      let x;
      let y;
//Switch statement to alter x, y axis of text depening on shape
//Ensure text is in middle of shape     
      switch (this.shape) {
        case 'Square':
          x = 75; 
          y = 125; 
          break;
        case 'Triangle':
          x = 90; 
          y = 155; 
          break;
        case 'Circle':
          x = 150; 
          y = 100;
          break;
        default:
          throw new Error('Invalid shape selected');
      }
    
      return `<text x="${x}" y="${y}" font-size="65" font-family="Bruno Ace" fill="${this.color}">${this.text}</text>`;
    }
}

  module.exports = Text ;
  