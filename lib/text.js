class Text {
    constructor(text, textColor) {
        this.text = text;
        this.textColor = textColor;
        this.y = 125;
    }

    setY(y) {
        this.y = y;
    }

    render() {
        return `<text x="150" y="${this.y}" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
}

module.exports = Text;