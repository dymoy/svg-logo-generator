const Circle = require('../lib/circle.js');

describe('Circle', () => {
    test('should render a Circle with the color keyword white', () => {
        const shape = new Circle();
        shape.setColor("white");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="white" />');
    });

    test('should render a Circle with color hexidecimal #FF00FF', () => { 
        const shape = new Circle(); 
        shape.setColor("#FF00FF");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="#FF00FF" />');
    });
});
