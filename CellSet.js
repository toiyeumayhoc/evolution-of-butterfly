class CellSet {
    constructor() {
        this.set = new Set();
    }

    add(cell) {
        this.set.add(cell);
    }

    show(color) {
        console.log("show color");
        for(let c of this.set){
            console.log(c);
            c.showColor(color);
        }
    }
}