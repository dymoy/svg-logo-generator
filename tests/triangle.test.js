const Triangle = require('../lib/triangle.js');

describe('Triangle', () => {
    test('should render a Triangle with the color keyword blue', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });

    test('should render a Triangle with the color hexidecimal #8a2be2', () => {
        const shape = new Triangle();
        shape.setColor("#8a2be2");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="#8a2be2" />');
    });
});
