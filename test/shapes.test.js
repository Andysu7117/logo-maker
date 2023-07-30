const Shapes = require('../lib/shapes');

describe('Shapes', () => {
  describe('Circle Render', () => {
    it('should create a circle with the inputed variables and render and svg code', () => {
      const circle = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
  <circle cx="150" cy="100" r="80" fill="yellow" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">abc</text>
</svg>`;
      const result = new Shapes.Circle('yellow', 'abc', 'black').render();

      expect(result).toEqual(circle);
    });
  });

  describe('Triangle Render', () => {
    it('should create a triangle with the inputed variables and render an svg code', () => {
      const triangle = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
  <polygon points="0,160 71.55417527999327,0 143.10835055998655,160" fill="yellow" />
  <text x="71.55417527999327" y="100" font-size="60" text-anchor="middle" fill="black">abc</text>
</svg>`;
      const result = new Shapes.Triangle('yellow', 'abc', 'black').render();

      expect(result).toEqual(triangle);
    });
  });

  describe('Square Render', () => {
    it('should create a square with the inputed variables and render an svg code', () => {
      const square = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
  <rect width="160" height="160" fill="yellow" />
  <text x="80" y="80" font-size="60" text-anchor="middle" fill="black">abc</text>
</svg>`;
      const result = new Shapes.Square('yellow', 'abc', 'black').render();

      expect(result).toEqual(square);
    });
  });
});
