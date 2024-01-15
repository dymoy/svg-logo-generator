const Shape = require('../lib/shape.js');

describe('Shape', () => {
    test('should create a Shape with an empty string as the shapeColor', () => {
        const shape = new Shape();
        expect(shape.shapeColor).toEqual("");

        shape.setColor("orange");
    });

    test('should create a Shape with the color orange', () => {
        const shape = new Shape();
        shape.setColor("orange");
        expect(shape.shapeColor).toEqual("orange");
    });
});

