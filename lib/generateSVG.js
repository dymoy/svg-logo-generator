const Circle = require('./circle.js');
const Triangle = require('./triangle.js');
const Square = require('./square.js');

function generateSVG(data) {
    var logo;

    switch (data.shape) {
        case "Circle":
            logo = new Circle(data.shapeColor);
            break;
        case "Triangle":
            logo = new Triangle(data.shapeColor);
            break;
        case "Square":
            logo = new Square(data.shapeColor);
            break;
    }

    return logo.render();
}

module.exports = generateSVG;