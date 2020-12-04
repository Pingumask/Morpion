const CELLULES = document.querySelectorAll("td");
const PLAYER = document.querySelector("body");
const GAMEOVER = document.querySelector("#gameOver");
const WINNER = document.querySelector("#winner");
let gagnant = "";

function getCellule(x, y){
    return document.querySelector(`[ligne="${x}"][colonne="${y}"]`).className;
}

function GameOver(){
    WINNER.innerText = gagnant;
    GAMEOVER.classList.add("show");
}

function Victoire(){
    for(let ligne=0;ligne<3;ligne++){//Vérification des lignes
        if (getCellule(ligne, 0) == getCellule(ligne, 1) && getCellule(ligne, 1) == getCellule(ligne, 2) && getCellule(ligne, 1)) return getCellule(ligne, 1)+" a gagné";
    }
    for(let colonne=0;colonne<3;colonne++){//Vérification des colonnes
        if (getCellule(0, colonne) == getCellule(1, colonne) && getCellule(1, colonne) == getCellule(2, colonne) && getCellule(1, colonne)) return getCellule(1, colonne)+" a gagné";
    }
    if (getCellule(0, 0) == getCellule(1, 1) && getCellule(1, 1) == getCellule(2, 2) && getCellule(1, 1)) return getCellule(1, 1)+" a gagné";
    if (getCellule(2, 0) == getCellule(1, 1) && getCellule(1, 1) == getCellule(0, 2) && getCellule(1, 1)) return getCellule(1, 1)+" a gagné";
    return "";
}

function PlateauPlein(){
    for(let y=0;y<3;y++){
        for(let x=0;x<3;x++){
            if (!getCellule(x, y)) return "";
        }
    }
    return "Match nul";
}

CELLULES.forEach( cellule =>{
    cellule.addEventListener("click", () =>{
        if(gagnant) return;
        if (!cellule.className){
            cellule.className=PLAYER.className;
            PLAYER.className == "X" ? PLAYER.className="O" : PLAYER.className="X";
        }          
        gagnant = Victoire();
        if (!gagnant) gagnant = PlateauPlein();
        if (gagnant) GameOver();     
    });
});

document.querySelector("#gameOver button").addEventListener("click", ()=>{
    CELLULES.forEach( cellule =>{
        cellule.className="";
    });
    gagnant="";
    GAMEOVER.classList.remove("show");
})