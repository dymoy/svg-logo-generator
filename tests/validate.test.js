const { isValidColorName, isValidRGB } = require('is-valid-css-color');

function validateText(answer) {
    if (answer.length > 3) {
        return false;
    }
    return true;
}

describe('isValidText', () => {
    test('should return true given a valid text EX1', () => {
        var text = "EX1";
        var actual = validateText(text);
        var expected = true;

        expect(actual).toEqual(expected);
    });

    test('should return true given a valid text "" ', () => {
        var text = "";
        var actual = validateText(text);
        var expected = true;

        expect(actual).toEqual(expected);
    });

    test('should return true given a valid text one', () => {
        var text = "one";
        var actual = validateText(text);
        var expected = true;

        expect(actual).toEqual(expected);
    });

    test('should return false given an invalid text LONG', () => {
        var text = "LONG";
        var actual = validateText(text);
        var expected = false;

        expect(actual).toEqual(expected);
    });

    test('should return false given an invalid text TOOLONG', () => {
        var text = "TOOLONG";
        var actual = validateText(text);
        var expected = false;

        expect(actual).toEqual(expected);
    });

});

describe('isValidColorName', () => {
    test('should return true given a valid color keyword lightblue', () => {
        var color = "lightblue";
        var actual = isValidColorName(color);
        var expected = true;
    
        expect(actual).toEqual(expected);
    });

    test('should return true given a valid color keyword wHiTe', () => {
        var color = "wHiTe";
        var actual = isValidColorName(color);
        var expected = true;
    
        expect(actual).toEqual(expected);
    });

    test('should return false given an invalid color keyword lightbrown', () => {
        var color = "lightbrown";
        var actual = isValidColorName(color);
        var expected = false;
    
        expect(actual).toEqual(expected);
    });

    test('should return false given a invalid color keyword mahogany', () => {
        var color = "mahogany";
        var actual = isValidColorName(color);
        var expected = false;
    
        expect(actual).toEqual(expected);
    });
});

describe("isValidRGB", () => {
    test('should return true given a valid hex color #FFFFFF (white)', () => {
        var hex = '#FFFFFF';
        var actual = isValidRGB(hex);
        var expected = true;

        expect(actual).toEqual(expected);
    });

    test('should return true given a valid hex color #ee82ee (violet)', () => {
        var hex = '#ee82ee';
        var actual = isValidRGB(hex);
        var expected = true;

        expect(actual).toEqual(expected);
    });

    test('should return false given an invalid hex color FFFFF (no #)', () => {
        var hex = 'FFFFFF';
        var actual = isValidRGB(hex);
        var expected = false;

        expect(actual).toEqual(expected);
    });

    test('should return false given a invalid hex color #ee82 (not a real color)', () => {
        var hex = '#ee82';
        var actual = isValidRGB(hex);
        var expected = false;

        expect(actual).toEqual(expected);
    });
});