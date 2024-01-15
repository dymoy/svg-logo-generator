class Shape {
    constructor(color = "") {
        this.color = color;
    }

    render() {
        throw new Error("Child class does not have render() implemented.");
    }
}

module.exports = Shape;