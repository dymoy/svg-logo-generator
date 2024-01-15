const Shape = require('/shape.js');

class Triangle extends Shape { 
    constructor(color) {
        super(color);
    }

    render() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150,20 55,180 245,180" fill="${this.color}"></polygon>
        </svg>`;
    }
}

module.exports = Triangle;