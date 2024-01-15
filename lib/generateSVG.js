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

    // Create a new object based on which shape the user chooses. 
    switch (data.shape) {
        case "Circle":
            shape = new Circle();
            break;
        case "Triangle":
            shape = new Triangle();
            // Set the Y value to 170 so that the text will be enclosed in the Triangle and not overflow.
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