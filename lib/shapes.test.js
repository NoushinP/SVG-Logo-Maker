const { Circle } = require("./shapes.js");

describe("Test suite for the Circle shape", () => {
  test("It renders an svg circle element", () => {
    const expSVG = '<circle cx="150" cy="100" r="80" fill="pink" />';
    const circle = new Circle();

    circle.setColor("pink");
    const svg = circle.render();
    expect(expSVG).toEqual(svg);
  });
});

describe("Test suite for the Triangle shape", () => {
  test("It renders an svg triangle element", () => {
    const expSVG = '<polygon points="50,15 90,80 10,80" fill="red"/>';
    const triangle = new Triangle();

    triangle.setColor("pink");
    const svg = triangle.render();
    expect(expSVG).toEqual(svg);
  });
});

describe("Test suite for the Square shape", () => {
  test("It renders an svg square element", () => {
    const expSVG = '<polygon points="10,10 60,10 60,60 10,60" fill="blue"/>';
    const square = new Square();

    square.setColor("blue");
    const svg = square.render();
    expect(expSVG).toEqual(svg);
  });
});
