const Square = require('../lib/square.js');

describe('Square', () => {
    test('should render a Square with the color keyword red', () => {
        const shape = new Square();
        shape.setColor("red");
        expect(shape.render()).toEqual('<rect x="70" y="20" width="160" height="160" fill="red" />');
    });

    test('should render a Square with the color hexidecimal ##7fffd4', () => {
        const shape = new Square();
        shape.setColor('#7fffd4');
        expect(shape.render()).toEqual('<rect x="70" y="20" width="160" height="160" fill="#7fffd4" />');
    });
});
