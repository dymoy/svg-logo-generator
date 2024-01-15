const Circle = require('../lib/circle.js')

describe('Circle', () => {
    test('should render a Circle with the color white', () => {
        const shape = new Circle();
        shape.setColor("white");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="white" />');
    })
})

