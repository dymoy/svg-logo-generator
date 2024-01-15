class Shape {
    constructor(shapeColor = "") {
        this.shapeColor = shapeColor;
    }
    
    setColor(shapeColor) {
        this.shapeColor = shapeColor;
    }

    render() {
        throw new Error("Child class does not have render() implemented.");
    }
}

module.exports = Shape;