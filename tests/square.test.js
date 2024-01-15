const Square = require('../lib/square.js')

describe('Square', () => {
    test('should render a Square with the color red', () => {
        const shape = new Square();
        shape.setColor("red");
        expect(shape.render()).toEqual('<rect x="70" y="20" width="160" height="160" fill="red" />');
    })
})

