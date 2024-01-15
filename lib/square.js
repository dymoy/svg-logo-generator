const Shape = require('./shape.js');

class Square extends Shape {
    constructor(shapeColor) {
        super(shapeColor);
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="70" y="20" width="160" height="160" fill="${this.shapeColor}"/>
</svg>`;
    }
}

module.exports = Square;