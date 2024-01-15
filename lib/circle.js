const Shape = require('./shape.js');

class Circle extends Shape {
    constructor(shapeColor) {
        super(shapeColor);
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>
</svg>`;
    }
}

module.exports = Circle;