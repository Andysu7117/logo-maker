class Shape {
  constructor(colour) {
    this.colour = colour;
  }

  render() {}
}

class Triangle extends Shape {
  render() {
    const sideLength = 100; // You can adjust the size as needed
    const halfSide = sideLength / 2;
    const height = (sideLength * Math.sqrt(3)) / 2;

    return `
          <svg width="${sideLength}" height="${height}">
            <polygon points="0,${height} ${halfSide},0 ${sideLength},${height}" fill="${this.color}" />
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
          </svg>
        `;
  }
}

module.exports = { Shape, Triangle, Circle, Square };
