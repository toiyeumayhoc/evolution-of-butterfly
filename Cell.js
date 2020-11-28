class Cell {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = Math.floor(Math.random() * 256);
        this.g = Math.floor(Math.random() * 256);
        this.b = Math.floor(Math.random() * 256);
        this.errorNo = 255*3;
    }

    show() {
        document.getElementById("butx" + this.x +"y"+ this.y).style.fill = "rgb(" + this.r + "," +this.g + "," + this.b + ")";
    }

    showColor(color) {
            document.getElementById("cellx" + this.x +"y"+ this.y).style.backgroundColor = color;
    }
}