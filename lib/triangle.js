const Shape = require('./shape.js');

class Triangle extends Shape { 
    constructor(shapeColor) {
        super(shapeColor);
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150,20 55,180 245,180" fill="${this.shapeColor}"/>
</svg>`;
    }
}

module.exports = Triangle;