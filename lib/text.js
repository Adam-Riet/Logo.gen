class Text {
    constructor(text, color, shape) {
      this.text = text;
      this.color = color;
      this.shape = shape;
    }
  
    render() {
      let x;
      let y;
      let z;
//Switch statement to alter x, y axis of text depening on shape
//Ensure text is in middle of shape     
      switch (this.shape) {
        case 'Square':
          x = 70; 
          y = 125;
          z = 75; 
          break;
        case 'Triangle':
          x = 87; 
          y = 155;
          z = 65; 
          break;
        case 'Circle':
          x = 20; 
          y = 120;
          z = 60;
          break;
        default:
          throw new Error('Invalid shape selected');
      }
    
      return `<text x="${x}" y="${y}" font-size="${z}" font-family="Bruno Ace" fill="${this.color}">${this.text}</text>`;
    }
}

  module.exports = Text ;
  