class GenerticAlgorithm{
    constructor(maze, desR, desG, desB) {
        this.maze = maze;
        this.destinationR = desR;
        this.destinationG = desG;
        this.destinationB = desB;
        this.generation = 250;
    }

    startEvolution(){
        console.log("start");
        let maze = this.maze;
        let desR = this.destinationR;
        let desG = this.destinationG;
        let desB = this.destinationB;
        let gen = this.generation;
        let animate = setInterval(evolution, 200);
        function evolution(){
            let count = parseInt(document.getElementById("generationCount").innerHTML);
            if(count === gen) return;
            document.getElementById("generationCount").innerHTML = count +1 ;
            let deathButterFlies = maze.getDeathButterFly(desR, desG,desB); //selection
            maze.joinColor(deathButterFlies); //cross over
            maze.randColorForCells(); // mutation
            maze.show();
        }
    }



}