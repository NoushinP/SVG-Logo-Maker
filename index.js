const fs = require("fs");
const inquirer = require("inquirer");
const { Circle, Triangle, Square } = require("./lib/shapes.js");
const colorName = require("color-name");
const colorArray = Object.keys(colorName);

inquirer
  .prompt([
    {
      type: "input",
      name: "text",
      message: "Please enter three letters of your desired shape:",
    },

    {
      type: "list",
      name: "textColor",
      message: "Pick a text color:",
      choices: colorArray,
    },

    {
      type: "checkbox",
      name: "shapes",
      message: "What shape do you choose?",
      choices: [
        new inquirer.Separator(" = Types = "),
        {
          name: "circle",
        },
        {
          name: "triangle",
        },
        {
          name: "square",
        },
      ],
    },

    {
      type: "list",
      name: "shapesColor",
      message: "Pick a color for the shape:",
      choices: colorArray,
    },
  ])
  .then((answers) => {
    console.log(answers);
    const svgContent = generateLogo(answers);

    fs.writeFile("logo.svg", svgContent, (err) =>
      err ? console.log(err) : console.log("Successfully created logo.svg!")
    );
  });

function generateLogo(answers) {
  console.log(answers.shapes[0]);
  let finalShape = "";
  let color = answers.shapesColor;

  console.log(answers.text);
  let text = answers.text.toUpperCase();
  let textColor = answers.textColor;

  switch (answers.shapes[0]) {
    case "circle":
      const circle = new Circle(color, text);
      finalShape = circle.render();
      break;
    case "triangle":
      const triangle = new Triangle(color, text);
      finalShape = triangle.render();
      break;
    case "square":
      const square = new Square(color, text);
      finalShape = square.render();
      break;
  }

  return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${finalShape} 
  <text x="150" y="125" font-size="20" text-anchor="middle" fill="${textColor}">
  ${text}</text>
  </svg>`;
}

module.exports = { generateLogo };
