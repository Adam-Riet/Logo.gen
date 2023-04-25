class Text {
    constructor(text, color) {
      this.text= text.slice(0, 3); // Ensure the content is up to 3 characters
      this.color = color;
    }
  
    render() {
      // Return SVG code for the text with the specified content and color
      // You can adjust the x, y, font-size, and font-family attributes as needed
      return `<text x="0" y="0" font-size="24" font-family="Arial" fill="${this.color}">${this.text}</text>`;
    }
  }