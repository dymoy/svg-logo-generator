const Shape = require('/shapes.js');

class Square extends Shape {
    constructor(color) {
        super(color);
    }

    render() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect x="70" y="20" width="160" height="160" fill='${this.color}'></rect>
        </svg>`;
    }
}

module.exports = Square;