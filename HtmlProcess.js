class HtmlProcess{
    constructor(maze,mazeWidth, mazeHeight){
        this.maze = maze;
        this.mazeWidth = mazeWidth;
        this.mazeHeight = mazeHeight;
        this.initMaze();
    }


    initMaze(){
        let mazeDiv = document.getElementById("mainMaze");
        mazeDiv.style.width = this.mazeWidth+"px";
        mazeDiv.style.height = this.mazeHeight+"px";
        mazeDiv.style.border = "3px solid";
        mazeDiv.style.borderColor = "#EF8354";
        mazeDiv.style.display = "table";
        mazeDiv.style.margin = "auto";
        let svg = document.getElementById("butterid");
        for(let i =0; i<this.maze.rows;i++){
            let cellRow = document.createElement("div");
            cellRow.id = "row"+i;
            cellRow.style.display = "table-row";
            mazeDiv.appendChild(cellRow);
            for(let j =0 ; j<this.maze.cols; j++)
            {
                let cell = document.createElement("div");
                cell.id = "cellx"+i+"y"+j;
                cell.style.display = "table-cell";
                cell.style.width = (this.mazeWidth/this.maze.cols - 2) + "px";
                cell.style.height = (this.mazeHeight/this.maze.rows - 2) + "px";
                let currentSVG = svg.cloneNode(true);
                currentSVG.id = "butx"+i+"y"+j;
                cell.appendChild(currentSVG);
                cellRow.appendChild(cell);
            }
        }
    }
}