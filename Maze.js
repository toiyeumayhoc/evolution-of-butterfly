class Maze {

    constructor(cols, rows) {
        this.cols = cols;
        this.rows = rows;
        this.mazeCell = new Array(this.rows);
        this.arrayOfCell = new Array(this.cols*this.rows);
        this.initMaze();
        this.reduce = cols*rows*0.1;
        this.mutation = cols*rows*0.05;
    }

    initMaze() {
        for (let i = 0; i < this.rows; i++) {
            this.mazeCell[i] = new Array(this.cols);
            for (let j = 0; j < this.cols; j++) {
                this.mazeCell[i][j] = new Cell(i, j);
                this.arrayOfCell.push(this.mazeCell[i][j]);
            }
        }
    }

    getDeathButterFly(r,g,b){
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this.mazeCell[i][j].errorNo = Math.abs(this.mazeCell[i][j].r - r) + Math.abs(this.mazeCell[i][j].g - g) + Math.abs(this.mazeCell[i][j].b - b);
            }
        }
        this.arrayOfCell.sort((a, b) => b.errorNo - a.errorNo);
        let deathCells = [];

        for(let i = 0; i< this.reduce; i++){
            this.arrayOfCell[i].errorNo = -1;
            deathCells.push(this.arrayOfCell[i]);
        }
        return deathCells;
    }

    joinColor(arrayDeathCells){
        for(let i = 0 ; i< this.reduce; i++){
            let dadCell = this.getAliveCell();
            let momCell = this.getAliveCell();
            let childCell = arrayDeathCells[i];
            childCell.r = Math.round((dadCell.r + momCell.r)/2);
            childCell.g = Math.round((dadCell.g + momCell.g)/2);
            childCell.b = Math.round((dadCell.b + momCell.b)/2);
        }
    }

    randColorForCells(){
        for(let i = 0 ; i< this.mutation; i++){
            let randCell = this.getDeathCell();
            randCell.r = Math.floor(Math.random() * 256);
            randCell.g = Math.floor(Math.random() * 256);
            randCell.b = Math.floor(Math.random() * 256);
        }
    }

    getAliveCell(){
        let randCellNo = Math.floor(Math.random() * (this.cols*this.rows));
        //don't choose death cell
        while(typeof this.arrayOfCell[randCellNo] === 'undefined' && this.arrayOfCell[randCellNo].errorNo<0){
            randCellNo = Math.floor(Math.random() * (this.cols*this.rows+1));
        }
        return this.arrayOfCell[randCellNo];
    }

    getDeathCell(){
        let randCellNo = Math.floor(Math.random() * (this.cols*this.rows));

        while(typeof this.arrayOfCell[randCellNo] === 'undefined' && this.arrayOfCell[randCellNo].errorNo>0){
            randCellNo = Math.floor(Math.random() * (this.cols*this.rows+1));
        }
        return this.arrayOfCell[randCellNo];
    }


    show() {
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this.mazeCell[i][j].show();
            }
        }
    }


}