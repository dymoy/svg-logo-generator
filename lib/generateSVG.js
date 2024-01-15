const Circle = require('/circle.js');
const Triangle = require('/triangle.js');
const Square = require('/square.js');

function generateSVG(data) {
    const shapeColor = data.color;
    let logo;

    switch (answer) {
        case "Circle":
            logo = new Circle(shapeColor);
        case "Triangle":
            logo = new Triangle(shapeColor);
        case "Square":
            logo = new Square(shapeColor);
    }

    return logo.render();
}

module.exports = generateSVG;