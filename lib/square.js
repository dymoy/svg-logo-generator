const Shape = require('./shape.js');

class Square extends Shape {
    constructor(shapeColor) {
        super(shapeColor);
    }

    render() {
        return `<rect x="70" y="20" width="160" height="160" fill="${this.shapeColor}" />`;
    }
}

module.exports = Square;