class Shape {
  constructor(shapeColour, text, textColour) {
    this.shapeColour = shapeColour;
    this.text = text;
    this.textColour = textColour;
  }
}

class Triangle extends Shape {
  constructor(shapeColour, text, textColour) {
    super(shapeColour, text, textColour);
  }
  render() {
    const sideLength = Math.sqrt(20480); // You can adjust the size as needed
    const halfSide = sideLength / 2;

    return `
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
            <polygon points="0,160 ${halfSide},0 ${sideLength},160" fill="${this.shapeColour}" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColour}">${this.text}</text>
          </svg>
        `;
  }
}

class Circle extends Shape {
  constructor(shapeColour, text, textColour) {
    super(shapeColour, text, textColour);
  }

  render() {
    return `
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
            <circle cx="150" cy="100" r="80" fill="${this.shapeColour}" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColour}">${this.text}</text>
          </svg>
        `;
  }
}

class Square extends Shape {
  constructor(shapeColour, text, textColour) {
    super(shapeColour, text, textColour);
  }

  render() {
    return `
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
            <rect width="160" height="160" fill="${this.shapeColour}" />
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColour}">${this.text}</text>
          </svg>
        `;
  }
}

module.exports = {
  Circle: Circle,
  Triangle: Triangle,
  Square: Square,
};
