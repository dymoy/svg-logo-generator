const Text = require('../lib/text.js');

describe('Text', () => {
    test('should render Text with the color white', () => {
        const text = new Text("EX1", "white");
        expect(text.render()).toEqual(`<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">EX1</text>`);
    });

    test('should render Text with the color orange with y=170', () => {
        const text = new Text("EX2", "orange");
        text.setY(170);
        expect(text.render()).toEqual(`<text x="150" y="170" font-size="60" text-anchor="middle" fill="orange">EX2</text>`);
    });
});

