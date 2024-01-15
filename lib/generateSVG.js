const Circle = require('./circle.js');
const Triangle = require('./triangle.js');
const Square = require('./square.js');
const Text = require('./text.js');

/**
 * Creates the corresponding shape Object that the user chooses. 
 * @param {JSON} data - JSON object of inquirer data.
 * @returns - HTML code that is returned by the new Shape render() method.
 */
function generateSVG(data) {
    var text = new Text(data.text, data.textColor);
    var shape;

    switch (data.shape) {
        case "Circle":
            shape = new Circle();
            break;
        case "Triangle":
            shape = new Triangle();
            text.setY(170);
            break;
        case "Square":
            shape = new Square();
            break;
    }

    shape.setColor(data.shapeColor);

    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape.render()}
    ${text.render()}
</svg>`;
}

module.exports = generateSVG;