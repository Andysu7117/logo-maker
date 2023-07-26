class Shape {
  constructor(colour, text, textColour) {
    this.colour = colour;
    this.text = text;
    this.textColour = textColour;
  }
}

class Triangle extends Shape {
  render() {
    const sideLength = 100; // You can adjust the size as needed
    const halfSide = sideLength / 2;
    const height = (sideLength * Math.sqrt(3)) / 2;

    return `
          <svg width="${sideLength}" height="${height}">
            <polygon points="0,${height} ${halfSide},0 ${sideLength},${height}" fill="${this.color}" />
            <text x="10" y="30" fill="${textColor}">${text}</text>
          </svg>
        `;
  }
}

class Circle extends Shape {
  render() {
    const radius = 50;

    return `
          <svg width="${2 * radius}" height="${2 * radius}">
            <circle cx="${radius}" cy="${radius}" r="${radius}" fill="${
      this.color
    }" />
            <text x="10" y="30" fill="${textColor}">${text}</text>
          </svg>
        `;
  }
}

class Square extends Shape {
  render() {
    const sideLength = 100; // You can adjust the size as needed

    return `
          <svg width="${sideLength}" height="${sideLength}">
            <rect width="${sideLength}" height="${sideLength}" fill="${this.color}" />
            <text x="10" y="30" fill="${textColor}">${text}</text>
          </svg>
        `;
  }
}

module.exports = {
  Circle: Circle,
  Triangle: Triangle,
  Square: Square,
};
